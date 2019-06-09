const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const app = new Koa();
const cors = require('koa2-cors');

// log all events to the terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

// instantiate our new Router
const router = new Router();
// require our external routes and pass in the router
require('./routes/basic')({ router });

app.use(cors({
    origin: function (ctx) {
      console.log("you are running the cors part from koa2-cors")
  //      if (ctx.url === '/user-post') {
            return "*"; 
  //      }
  //      return 'http://localhost:8080'; 
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


app
.use(require('koa-body')())
.use(router.allowedMethods())
.use(router.routes())

// tell the server to listen to events on a specific port
const server = app.listen(3005);
module.exports = server;
