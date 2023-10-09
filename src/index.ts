import express, { Express } from 'express';
import "reflect-metadata"
import dotenv from 'dotenv';
import routes from './start/routes';
import DB from './start/DB';

const app: Express = express();
const port = process.env.PORT;
dotenv.config();
app.use(express.json())
app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running`, process.env.ENVIRONMENT === 'local' ? `at http://localhost:${port}` : ``);
});

export default DB.handle()