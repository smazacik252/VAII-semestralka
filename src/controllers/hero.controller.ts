import {Request, Response} from 'express'
import {Hero} from "../entities/Hero";
import connection from '../db';

export default class HeroController {

    private heroRepository = connection.getRepository(Hero);


    public getAll = async (req: Request, res: Response) => {
        try {
            const heroes = await this.heroRepository.find();
            res.json(heroes);
        } catch (error) {
            console.error('Error fetching heroes:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public getHeroById = async (req: Request, res: Response) => {
        try {
            const hero = await this.heroRepository.findOneBy({id: parseInt(req.params.id)});

            if(!hero) {
                res.status(404).json({message: 'Hero not found'});
            } else {
                res.json(hero);
            }
        } catch (error) {
            console.error('Error fetching hero:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public getHeroByName = async (req: Request, res: Response) => {
        try {
            const hero = await this.heroRepository.findOneBy({name: req.params.name});

            if(!hero) {
                res.status(404).json({message: 'Hero not found'});
            } else {
                res.json(hero);
            }
        } catch (error) {
            console.error('Error fetching hero:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public createHero = async (req: Request, res: Response)  => {
        try {
            const user = this.heroRepository.create(req.body);
            const savedUser = await this.heroRepository.save(user);
            res.status(201).json(savedUser);
        } catch (error) {
            console.error('Error creating hero:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public updateHero = async (req: Request, res: Response) => {
        try {
            const hero = await this.heroRepository.findOneBy({id: parseInt(req.params.id)});

            if(!hero) {
                res.status(404).json({message: 'Hero not found'});
            } else {
                this.heroRepository.merge(hero, req.body);
                const updateHero = await this.heroRepository.save(hero);
                res.json(updateHero);
            }
        } catch (error) {
            console.error('Error updating hero:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public deleteHero = async (req: Request, res: Response)  => {
        try {
            const result = await this.heroRepository.delete(parseInt(req.params.id));

            if (result.affected === 0) {
                res.status(404).json({message: 'Hero not found'});
            } else {
                res.status(204).send();
            }

        } catch (error) {
            console.error('Error deleting hero:', error);
            res.status(500).json({message:'Internal server error'});
        }
    }


}