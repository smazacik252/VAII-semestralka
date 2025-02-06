import {Request, Response} from 'express'
import {User} from "../entities/User";
import connection from '../db';

export default class UserController {

    private userRepository = connection.getRepository(User);


    public login = async (req: Request, res: Response) => {
        const { userName, password } = req.body;
        if (!userName || !password) {
            res.status(400).json({ message: "User name and password are required" });
        } else {
            try {
                const user = await this.userRepository.findOneBy({userName});

                if (!user) {
                    res.status(404).json({message: "User not found"});
                } else if (user.password !== password) {
                    res.status(401).json({message: "Invalid credentials"});
                } else {
                    const { password: _, ...userData } = user;
                    res.status(200).json({message: "Login successful", user: userData});
                }

            } catch (error) {
                console.error("Error during login:", error);
                res.status(500).json({message: "Internal server error"});
            }
        }
    }

    public getAll = async (req: Request, res: Response) => {
        try {
            const users = await this.userRepository.find();
            res.json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public getUserById = async (req: Request, res: Response)   => {
        try {
            const user = await this.userRepository.findOneBy({id: parseInt(req.params.id)});

            if(!user) {
                 res.status(404).json({message: 'User not found'});
            } else {
                res.json(user);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public createUser = async (req: Request, res: Response)  => {
        try {
            const user = this.userRepository.create(req.body);
            const savedUser = await this.userRepository.save(user);
            res.status(201).json(savedUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public updateUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userRepository.findOneBy({id: parseInt(req.params.id)});

            if(!user) {
                res.status(404).json({message: 'User not found'});
            } else {
                this.userRepository.merge(user, req.body);
                const updateUser = await this.userRepository.save(user);
                res.json(updateUser);
            }
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public deleteUser = async (req: Request, res: Response)  => {
        try {
            const result = await this.userRepository.delete(parseInt(req.params.id));

            if (result.affected === 0) {
                res.status(404).json({message: 'User not found'});
            } else {
                res.status(204).send();
            }

        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({message:'Internal server error'});
        }
    }
}