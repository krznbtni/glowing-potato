import { createServer } from 'http';
import express from 'express';

const app = express();
const server = createServer(app);
const port = 3000;

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
server.listen(port, () => console.log(`Server listening on port ${port}`));
