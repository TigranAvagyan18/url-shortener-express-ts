import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { Link } from './link.entity';

export class LinkController {
	static async get(req: Request, res: Response) {
		const { url } = req.body;

		const link = await Link.findOne({ originalUrl: url });

		if (!link) throw new Error('Not found');

		link.count += 1;
		await link.save();

		res.send(link.url);
	}

	static async shorten(req: Request, res: Response) {
		const { url } = req.body;
		const shortenedUrl = nanoid(7);

		const link = new Link();
		link.url = shortenedUrl;
		link.originalUrl = url;
		await link.save();
		res.send(link);
	}
}
