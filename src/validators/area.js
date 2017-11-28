import validator from './index';

export const areaValidator = (obj) => {
  return validator(obj, {
    properties: {
      name: {
        description: 'name is required',
        message: 'name is required',
        type: 'string',
        required: true
      }
    }
  })
}
