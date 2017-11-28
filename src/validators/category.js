import validator from './index';

export const categoryValidator = (obj) => {
  return validator(obj, {
    properties: {
      name: {
        type: 'string',
        required: true,
        messages: {
          type: 'name not a string type',
          required: 'name is required'
        }
      },
      areaId: {
        type: 'string',
        required: true,
        messages: {
          type: 'areaId not a string type',
          required: 'areId is required'
        }
      }
    }
  })
}
