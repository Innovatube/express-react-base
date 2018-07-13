import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import methodOverride from 'method-override';
import path from 'path';

import constant from '../config/directory';

const app = express();

require('dotenv').config();

app.set('port',  process.env.APP_PORT || 3000);
app.set('host',  process.env.APP_HOST || 'localhost');

app.use(constant.distDirString, express.static(constant.distDir));
console.log(__dirname);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(constant.assetsDir));

export default app;