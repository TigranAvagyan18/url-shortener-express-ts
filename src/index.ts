import express from 'express';
import 'express-async-errors';
import { createConnection } from 'typeorm';
import cors from 'cors';
import config from './config';
import { ormconfig } from './config/ormconfig';
import { LinkController } from './entities/Link/link.controller';
import { errorHandlerMiddleware } from './middlewares/error';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', LinkController.get);

app.post('/shorten', LinkController.shorten);

app.use(errorHandlerMiddleware);

const run = async () => {
	await createConnection(ormconfig);
	app.listen(config.PORT);
};

run();
