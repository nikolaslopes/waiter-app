import type { NextFunction, Request, Response } from "express";

export const errorHandler = (
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	console.log(error);
	response.status(500).send({ errors: [{ message: "Something went wrong" }] });
};
