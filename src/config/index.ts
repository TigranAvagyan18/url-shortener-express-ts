import 'dotenv/config';
import { cleanEnv, host, port, str } from 'envalid';

const env = cleanEnv(process.env, {
	APP_ENV: str({ choices: ['dev', 'prod'], default: 'dev' }),

	PORT: port(),

	DB_NAME: str(),
	DB_HOST: host(),
	DB_PORT: port(),
	DB_USER: str(),
	DB_PASSWORD: str()
});

const config = {
	APP_ENV: env.APP_ENV,

	PORT: env.PORT,

	DB_NAME: env.DB_NAME,
	DB_HOST: env.DB_HOST,
	DB_PORT: env.DB_PORT,
	DB_USER: env.DB_USER,
	DB_PASSWORD: env.DB_PASSWORD
};

export default config;
