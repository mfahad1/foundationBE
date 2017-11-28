import * as districtService from '../services/district'

export const post = async (ctx , next) =>  {
  const promise = await districtService.create(ctx.request.body);
  ctx.body = promise;

};

export const insertCategory = async (ctx , next) =>  {
  const allReq = Object.assign({}, ctx.request.body, ctx.params);
  
  const promise = await districtService.insertCategory(allReq);
  ctx.body = promise;
 
};

export const updateCategory = async (ctx , next) =>  {
  const allReq = Object.assign({}, ctx.request.body, ctx.params);
  
  const promise = await districtService.updateCategory(allReq);
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