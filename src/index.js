import Koa from 'koa';
import routesMiddleware from './routes';
import errorMiddleware from './middlewares/error'
import parseResult from './middlewares/parser'
import { connect } from './config/database';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

connect(); // connecting database


const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(errorMiddleware());
app.use(parseResult());
app.use(routesMiddleware());

app.listen(3000);