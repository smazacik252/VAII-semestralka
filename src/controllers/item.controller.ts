import {Request, Response} from 'express'
import {Item} from "../entities/Item";
import connection from '../db';

export default class ItemController {

    private itemRepositoryRepository = connection.getRepository(Item);


    public getAll = async (req: Request, res: Response) => {
        try {
            const items = await this.itemRepositoryRepository.find();
            res.json(items);
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public getItemById = async (req: Request, res: Response) => {
        try {
            const item = await this.itemRepositoryRepository.findOneBy({id: parseInt(req.params.id)});

            if(!item) {
                res.status(404).json({message: 'Item not found'});
            } else {
                res.json(item);
            }
        } catch (error) {
            console.error('Error fetching item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public getItemsByType = async (req: Request, res: Response) => {
        try {
            const items = await this.itemRepositoryRepository.findBy({type: req.params.type});
            res.json(items);
        } catch (error) {
            console.error('Error fetching item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public createItem = async (req: Request, res: Response)  => {
        try {
            const item = this.itemRepositoryRepository.create(req.body);
            const savedItem = await this.itemRepositoryRepository.save(item);
            res.status(201).json(savedItem);
        } catch (error) {
            console.error('Error creating hero:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public updateItem = async (req: Request, res: Response) => {
        try {
            const item = await this.itemRepositoryRepository.findOneBy({id: parseInt(req.params.id)});

            if(!item) {
                res.status(404).json({message: 'Hero not found'});
            } else {
                this.itemRepositoryRepository.merge(item, req.body);
                const updateItem = await this.itemRepositoryRepository.save(item);
                res.json(updateItem);
            }
        } catch (error) {
            console.error('Error updating hero:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public deleteItem = async (req: Request, res: Response)  => {
        try {
            const result = await this.itemRepositoryRepository.delete(parseInt(req.params.id));

            if (result.affected === 0) {
                res.status(404).json({message: 'Item not found'});
            } else {
                res.status(204).send();
            }

        } catch (error) {
            console.error('Error deleting hero:', error);
            res.status(500).json({message:'Internal server error'});
        }
    }
}