import express from 'express';
import { CreateApplicationDto, ApplicationDto } from '@creditor-app-example/creditor-app-lib';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
const applications: ApplicationDto[] = [];

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/applications', (req, res) => {
  res.send(applications);
});

app.post('/applications', bodyParser.json(), (req, res) => {
  const dto = req.body as CreateApplicationDto;
  applications.push(({
    id: applications.length + 1,
    ...dto,
  }));
  res.end();
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
