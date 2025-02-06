import { Request, Response } from 'express';
import { Article } from '../entities/Article';
import connection from '../db';

export default class ArticleController {
    private articleRepository = connection.getRepository(Article);

    public getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const articles = await this.articleRepository.find();
            res.json(articles);
        } catch (error) {
            console.error('Chyba pri načítaní článkov:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public getLatest = async (req: Request, res: Response): Promise<void> => {
        try {
            const latestArticles = await this.articleRepository.find({
                order: { createdAt: 'DESC' },
                take: 3,
            });
            res.json(latestArticles);
        } catch (error) {
            console.error('Chyba pri načítaní najnovších článkov:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public getArticleById = async (req: Request, res: Response): Promise<void> => {
        try {
            const articleId = parseInt(req.params.id, 10);
            const article = await this.articleRepository.findOneBy({ id: articleId });

            if (!article) {
                res.status(404).json({ message: 'Článok nebol nájdený' });
                return;
            }
            res.json(article);
        } catch (error) {
            console.error('Chyba pri načítaní článku:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public createArticle = async (req: Request, res: Response): Promise<void> => {
        try {
            const article = this.articleRepository.create(req.body);
            const savedArticle = await this.articleRepository.save(article);
            res.status(201).json(savedArticle);
        } catch (error) {
            console.error('Chyba pri vytváraní článku:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public updateArticle = async (req: Request, res: Response): Promise<void> => {
        try {
            const articleId = parseInt(req.params.id, 10);
            const article = await this.articleRepository.findOneBy({ id: articleId });
            if (!article) {
                res.status(404).json({ message: 'Článok nebol nájdený' });
                return;
            }
            this.articleRepository.merge(article, req.body);
            const updatedArticle = await this.articleRepository.save(article);
            res.json(updatedArticle);
        } catch (error) {
            console.error('Chyba pri úprave článku:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };

    public deleteArticle = async (req: Request, res: Response): Promise<void> => {
        try {
            const articleId = parseInt(req.params.id, 10);
            const result = await this.articleRepository.delete(articleId);
            if (result.affected === 0) {
                res.status(404).json({ message: 'Článok nebol nájdený' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            console.error('Chyba pri mazaní článku:', error);
            res.status(500).json({ message: 'Vnútorná chyba servera' });
        }
    };
}
