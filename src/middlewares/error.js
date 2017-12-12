import compose from 'koa-compose';

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 401;
    ctx.body = {
      success: false,
      error: err.message
    }
    console.log('error:::::::11111', err);
    console.log('enddd');
    ctx.app.emit('error', err, ctx);
  }
}

export default () => compose([
  errorMiddleware,
]);