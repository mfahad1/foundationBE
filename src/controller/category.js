import * as categoryService from '../services/category'

export const post = async (ctx , next) =>  {
 
  const promise = await categoryService.create(ctx.request.body);
  ctx.body = promise;

};


export const getAll = async (ctx) =>  {
  
  const promise = await categoryService.getAll();
  ctx.body = promise;
 
};

export const getById = async (ctx) => {
  console.log('all  ctx', ctx);
  const promise = await categoryService.getById(ctx.params);
  ctx.body = promise;

}

export const getByAreaId = async (ctx) => {
  const promise = await categoryService.getByAreaId(ctx.params);
  ctx.body = promise;
}