import { check } from 'express-validator';

import validatorMiddleware from '../../Middleware/validatorMiddleware.js';

const bookIdValidator = [
    check('bookId', 'Book ID is required').not().isEmpty()
        .isMongoId().withMessage('Invalid book ID'),
    validatorMiddleware
];

export const reserveBookValidator = bookIdValidator;
export const cancelReservationValidator = bookIdValidator;