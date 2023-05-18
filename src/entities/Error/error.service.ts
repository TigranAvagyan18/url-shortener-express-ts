export class CustomError extends Error {
	status: number;

	isCustom?: boolean;

	constructor(error?: string) {
		super();
		this.name = error || 'Unexpected Error';
		this.status = 500;
		this.isCustom = true;
	}
}
export class NotFoundError extends CustomError {
	constructor(error?: string) {
		super();
		this.name = error || 'Not found';
		this.status = 404;
	}
}
