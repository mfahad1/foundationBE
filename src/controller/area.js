import * as areaService from '../services/area'

export const post = async (ctx , next) =>  {
 
  const promise = await areaService.createArea(ctx.request.body);
  ctx.body = promise;

};


export const getAll = async (ctx) =>  {
  
  const promise = await areaService.getAll();
  ctx.body = promise;
 
};

export const getById = async (ctx) => {
  console.log('all  ctx', ctx);
  const promise = await areaService.getById(ctx.params);
  ctx.body = promise;

}