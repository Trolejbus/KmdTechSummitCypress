import express from 'express';
import { CreateApplicationDto, ApplicationDto } from '@creditor-app-example/creditor-app-lib';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
let applications: ApplicationDto[] = [];

app.use(cors({
  origin: '*'
}));

app.post('/reset', (req, res) => {
  applications = [];
  res.end();
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/applications', (req, res) => {
  res.send(applications);
});

app.get('/applications/:id', (req, res) => {
  res.send(applications.find(a => a.id.toString() === req.params.id));
});

app.post('/applications', bodyParser.json(), (req, res) => {
  const dto = req.body as CreateApplicationDto;
  applications.push(({
    id: applications.length + 1,
    ...dto,
    status: 0,
  }));
  res.end();
});

app.put('/applications/:id', (req, res) => {
  const application = applications.find(a => a.id.toString() === req.params.id);
  application.status++;
  res.end();
});

app.put('/applications/:id/init3rdParty', (req, res) => {
  res.end();
});

app.put('/applications/:id/finalize', (req, res) => {
  setTimeout(() => { res.end() }, 2000);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
