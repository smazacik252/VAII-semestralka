import { body, param } from 'express-validator';

export const createUserValidator = [
    body('userName')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('Meno používateľa je povinné.'),
    body('password')
        .notEmpty()
        .withMessage('Heslo je povinné.')
        .isLength({ min: 4 })
        .withMessage('Heslo musí mať aspoň 4 znaky.'),
];

export const loginValidator = [
    body('userName')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('Meno používateľa je povinné.'),
    body('password')
        .notEmpty()
        .withMessage('Heslo je povinné.')
];

export const userIdValidator = [
    param('id')
        .isInt({ allow_leading_zeroes: false })
        .withMessage('ID musí byť celé číslo.'),
];
