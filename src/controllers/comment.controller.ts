import { Request, Response } from 'express';
import { Comment } from '../entities/Comment';
import connection from '../db';

export default class CommentController {
    private commentRepository = connection.getRepository(Comment);

    public getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const comments = await this.commentRepository.find();
            res.json(comments);
        } catch (error) {
            console.error('Chyba pri načítaní komentárov:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public getCommentsByArticleId = async (req: Request, res: Response): Promise<void> => {
        try {
            const articleId = parseInt(req.params.articleId);
            const comments = await this.commentRepository.find({
                where: { article: { id: articleId } },
                order: { createdAt: 'ASC' }
            });
            res.json(comments);
        } catch (error) {
            console.error('Chyba pri načítaní komentárov k článku:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public getCommentById = async (req: Request, res: Response): Promise<void> => {
        try {
            const commentId = parseInt(req.params.id, 10);
            const comment = await this.commentRepository.findOneBy({ id: commentId });

            if (!comment) {
                res.status(404).json({ message: 'Komentár nebol nájdený' });
                return;
            }
            res.json(comment);
        } catch (error) {
            console.error('Chyba pri načítaní komentára:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public createComment = async (req: Request, res: Response): Promise<void> => {
        try {
            const comment = this.commentRepository.create(req.body);
            const savedComment = await this.commentRepository.save(comment);
            res.status(201).json(savedComment);
        } catch (error) {
            console.error('Chyba pri vytváraní komentára:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public updateComment = async (req: Request, res: Response): Promise<void> => {
        try {
            const commentId = parseInt(req.params.id, 10);
            const comment = await this.commentRepository.findOneBy({ id: commentId });
            if (!comment) {
                res.status(404).json({ message: 'Komentár nebol nájdený' });
                return;
            }
            this.commentRepository.merge(comment, req.body);
            const updatedComment = await this.commentRepository.save(comment);
            res.json(updatedComment);
        } catch (error) {
            console.error('Chyba pri úprave komentára:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public deleteComment = async (req: Request, res: Response): Promise<void> => {
        try {
            const commentId = parseInt(req.params.id, 10);
            const result = await this.commentRepository.delete(commentId);
            if (result.affected === 0) {
                res.status(404).json({ message: 'Komentár nebol nájdený' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            console.error('Chyba pri mazaní komentára:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };
}
