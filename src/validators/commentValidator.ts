import { body, param } from 'express-validator';
import connection from '../db';
import { Article } from '../entities/Article';


const articleExists = async (articleId: number) => {
    const articleRepository = connection.getRepository(Article);
    const article = await articleRepository.findOneBy({ id: articleId });
    if (!article) {
        throw new Error('Článok s týmto ID neexistuje.');
    }
};

export const createCommentValidator = [
    body('content')
        .trim()
        .notEmpty()
        .withMessage('Pole "content" je povinné.'),

    body('articleId')
        .isInt({ allow_leading_zeroes: false })
        .withMessage('Pole "articleId" musí byť platné celé číslo.')
        .custom(async (value) => {
            await articleExists(value);
        })
];

export const updateCommentValidator = [
    body('content')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Pole "content" nemôže byť prázdne.')
];

export const validateCommentId = [
    param('id')
        .isInt({ allow_leading_zeroes: false })
        .withMessage('ID komentára musí byť celé číslo.')
];

export const validateArticleId = [
    param('articleId')
        .isInt({ allow_leading_zeroes: false })
        .withMessage('ID článku musí byť celé číslo.')
];
