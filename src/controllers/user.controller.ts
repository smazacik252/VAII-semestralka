import { Request, Response } from 'express';
import { User } from '../entities/User';
import connection from '../db';

export default class UserController {
    private userRepository = connection.getRepository(User);

    public login = async (req: Request, res: Response): Promise<void> => {
        const { userName, password } = req.body;
        if (!userName || !password) {
            res.status(400).json({ message: 'Meno používateľa a heslo sú povinné' });
            return;
        }

        try {
            const user = await this.userRepository.findOneBy({ userName });
            if (!user) {
                res.status(404).json({ message: 'Používateľ nebol nájdený' });
                return;
            }
            if (user.password !== password) {
                res.status(401).json({ message: 'Nesprávne prihlasovacie údaje' });
                return;
            }

            const { password: _, ...userData } = user;
            res.status(200).json({
                message: 'Prihlásenie úspešné',
                user: userData
            });
        } catch (error) {
            console.error('Chyba počas prihlasovania:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userRepository.find();
            res.json(users);
        } catch (error) {
            console.error('Chyba pri načítaní používateľov:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userRepository.findOneBy({ id: parseInt(req.params.id, 10) });
            if (!user) {
                res.status(404).json({ message: 'Používateľ nebol nájdený' });
                return;
            }
            res.json(user);
        } catch (error) {
            console.error('Chyba pri načítaní používateľa:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = this.userRepository.create(req.body);
            const savedUser = await this.userRepository.save(user);
            res.status(201).json(savedUser);
        } catch (error) {
            console.error('Chyba pri vytváraní používateľa:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userRepository.findOneBy({ id: parseInt(req.params.id, 10) });
            if (!user) {
                res.status(404).json({ message: 'Používateľ nebol nájdený' });
                return;
            }
            this.userRepository.merge(user, req.body);
            const updatedUser = await this.userRepository.save(user);
            res.json(updatedUser);
        } catch (error) {
            console.error('Chyba pri úprave používateľa:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.userRepository.delete(parseInt(req.params.id, 10));
            if (result.affected === 0) {
                res.status(404).json({ message: 'Používateľ nebol nájdený' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            console.error('Chyba pri mazaní používateľa:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };
}
