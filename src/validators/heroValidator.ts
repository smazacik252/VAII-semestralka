import { body } from 'express-validator';

export const heroValidator = [
    body('name')
        .isString().withMessage('Meno musí byť reťazec.')
        .notEmpty().withMessage('Meno je povinné.'),
    body('portrait')
        .isString().withMessage('Portrét musí byť reťazec.')
        .notEmpty().withMessage('Portrét je povinný.'),
    body('render')
        .isString().withMessage('Render musí byť reťazec.')
        .notEmpty().withMessage('Render je povinný.'),
    body('info')
        .isString().withMessage('Info musí byť reťazec.')
        .notEmpty().withMessage('Info je povinné.'),
    body('lore')
        .isString().withMessage('Lore musí byť reťazec.')
        .notEmpty().withMessage('Lore je povinné.'),
    body('dps')
        .isFloat({ min: 0 }).withMessage('DPS musí byť kladné číslo.'),
    body('bulletDamage')
        .isFloat({ min: 0 }).withMessage('Bullet damage musí byť kladné číslo.'),
    body('ammo')
        .isInt({ min: 0 }).withMessage('Ammo musí byť celé číslo.'),
    body('bulletsPerSec')
        .isFloat({ min: 0 }).withMessage('BulletsPerSec musí byť kladné číslo.'),
    body('reloadTime')
        .isFloat({ min: 0 }).withMessage('ReloadTime musí byť kladné číslo.'),
    body('bulletVelocity')
        .isFloat({ min: 0 }).withMessage('BulletVelocity musí byť kladné číslo.'),
    body('lightMelee')
        .isFloat({ min: 0 }).withMessage('LightMelee musí byť kladné číslo.'),
    body('heavyMelee')
        .isFloat({ min: 0 }).withMessage('HeavyMelee musí byť kladné číslo.'),
    body('falloffRange')
        .isFloat({ min: 0 }).withMessage('FalloffRange musí byť kladné číslo.'),
    body('health')
        .isFloat({ min: 0 }).withMessage('Health musí byť kladné číslo.'),
    body('healthRegen')
        .isFloat({ min: 0 }).withMessage('HealthRegen zdravia musí byť kladné číslo.'),
    body('moveSpeed')
        .isFloat({ min: 0 }).withMessage('MoveSpeed pohybu musí byť kladné číslo.'),
    body('stamina')
        .isInt({ min: 0 }).withMessage('Stamina musí byť celé číslo.')
];
