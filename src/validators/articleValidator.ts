import { body, param } from 'express-validator';

export const createArticleValidator = [
    body('author')
        .trim()
        .notEmpty()
        .withMessage('Pole "author" je povinné.'),
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Pole "title" je povinné.'),
    body('summary')
        .trim()
        .notEmpty()
        .withMessage('Pole "summary" je povinné.'),
    body('text')
        .trim()
        .notEmpty()
        .withMessage('Pole "text" je povinné.'),
    body('imagePath')
        .optional({ nullable: true })
        .trim()
];

export const updateArticleValidator = [
    body('author')
        .optional()
        .trim(),
    body('title')
        .optional()
        .trim(),
    body('summary')
        .optional()
        .trim(),
    body('text')
        .optional()
        .trim(),
    body('imagePath')
        .optional()
        .trim()
];

export const validateArticleId = [
    param('id')
        .isInt({ allow_leading_zeroes: false })
        .withMessage('ID článku musí byť celé číslo.'),
];
