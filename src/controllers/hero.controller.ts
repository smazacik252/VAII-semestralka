import { Request, Response } from 'express';
import connection from '../db';
import { Hero } from '../entities/Hero';

export default class HeroController {
    private heroRepository = connection.getRepository(Hero);

    public getAll = async (req: Request, res: Response) => {
        try {
            const heroes = await this.heroRepository.find();
            res.json(heroes);
        } catch (error) {
            console.error('Chyba pri načítaní hrdinov:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    }

    public getHeroById = async (req: Request, res: Response) => {
        try {
            const hero = await this.heroRepository.findOneBy({ id: parseInt(req.params.id) });

            if (!hero) {
                return res.status(404).json({ message: 'Hrdina nebol nájdený' });
            }
            res.json(hero);
        } catch (error) {
            console.error('Chyba pri načítaní hrdinu:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    }

    public getHeroByName = async (req: Request, res: Response) => {
        try {
            const hero = await this.heroRepository.findOneBy({ urlName: req.params.urlName });

            if (!hero) {
                return res.status(404).json({ message: 'Hrdina nebol nájdený' });
            }
            res.json(hero);
        } catch (error) {
            console.error('Chyba pri načítaní hrdinu podľa mena:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    }

    public createHero = async (req: Request, res: Response) => {
        try {
            const hero = this.heroRepository.create(req.body);
            const savedHero = await this.heroRepository.save(hero);
            res.status(201).json(savedHero);
        } catch (error) {
            console.error('Chyba pri vytváraní hrdinu:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    }

    public updateHero = async (req: Request, res: Response) => {
        try {
            const hero = await this.heroRepository.findOneBy({ id: parseInt(req.params.id) });

            if (!hero) {
                return res.status(404).json({ message: 'Hrdina nebol nájdený' });
            }

            this.heroRepository.merge(hero, req.body);
            const updatedHero = await this.heroRepository.save(hero);
            res.json(updatedHero);
        } catch (error) {
            console.error('Chyba pri úprave hrdinu:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    }

    public deleteHero = async (req: Request, res: Response) => {
        try {
            const result = await this.heroRepository.delete(parseInt(req.params.id));

            if (result.affected === 0) {
                return res.status(404).json({ message: 'Hrdina nebol nájdený' });
            }
            res.status(204).send();
        } catch (error) {
            console.error('Chyba pri mazaní hrdinu:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    }
}
