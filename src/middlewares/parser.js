import compose from 'koa-compose';

const parseResult = async (ctx, next) => {
  try {
    await next();
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: ctx.body
    }
  } catch (err) {
    console.log('error:::::::11111', err);
    console.log('enddd');
  
  }
}

export default () => compose([
  parseResult,
]);