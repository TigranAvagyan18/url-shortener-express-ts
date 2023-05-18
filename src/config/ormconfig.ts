import { ConnectionOptions } from 'typeorm';
import { Link } from '../entities/Link/link.entity';
import config from '.';

export const ormconfig: ConnectionOptions = {
	type: 'postgres',
	host: config.DB_HOST,
	port: config.DB_PORT,
	username: config.DB_USER,
	password: config.DB_PASSWORD,
	database: config.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [Link]
};

export default ormconfig;
