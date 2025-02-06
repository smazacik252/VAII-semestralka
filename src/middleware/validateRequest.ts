import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export function validateRequest(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array().map(err => ({
                field: (err as any).param,
                message: err.msg
            }))
        });
        return;
    }
    next();
}
