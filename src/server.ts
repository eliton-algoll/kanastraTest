import express from "express";
import routes from './http/routes/routes'

const app = express();

app.use(express.json());

app.use(routes);

app.listen('3333', () => {
    console.log('listen on port 3333');
});
