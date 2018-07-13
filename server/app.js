import app from './config/express';
import routes from './routes/index.route';
import swagger from './config/swagger';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';
import constant from './config/directory';

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}
console.log(process.env.NODE_ENV);
// Swagger API documentation
app.get('/swagger.json', (req, res) => {
   res.json(swagger);
});

// Router
app.use('/api', routes);
// Landing page
app.get('*', (req, res) => {
  const assets = process.env.NODE_ENV === 'development' ? 'dist' : constant.distDirString;
  res.render('home.ejs', {
    title: 'Demo home page',
    baseUrl: req.protocol + '://' + req.headers.host + '/',
    assets: assets
  })
});

// Joi Error Handler
app.use(joiErrorHandler);

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
