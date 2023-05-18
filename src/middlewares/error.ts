/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../entities/Error/error.service';

export const errorHandlerMiddleware = (err: CustomError, _req: Request, res: Response, next: NextFunction) => {
	if (!err) {
		next(err);
	}
	res.status(err.status || 500);
	res.send({ error: err.name, message: err.message, statusCode: err.status || 500 });
};
