import { body, param } from 'express-validator';

export const createItemValidator = [
    body('type')
        .trim()
        .notEmpty()
        .withMessage('Pole "type" je povinné.'),
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Pole "name" je povinné.'),
    body('price')
        .isInt({ min: 0 })
        .withMessage('Pole "price" musí byť nezáporné celé číslo.'),
    body('description')
        .trim()
        .notEmpty()
        .withMessage('Pole "description" je povinné.')
];

export const updateItemValidator = [
    body('type')
        .optional()
        .trim(),
    body('name')
        .optional()
        .trim(),
    body('price')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Pole "price" musí byť nezáporné celé číslo.'),
    body('description')
        .optional()
        .trim()
];

export const validateItemId = [
    param('id')
        .isInt({ allow_leading_zeroes: false })
        .withMessage('ID položky musí byť celé číslo.')
];

export const validateItemType = [
    param('type')
        .trim()
        .notEmpty()
        .withMessage('Pole "type" je povinné.')
];
