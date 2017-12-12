import validator from './index';

export const authValidator = (obj) => {
  return validator(obj, {
    properties: {
      email: {
        description: 'email is required',
        message: 'email is required',
        type: 'string',
        required: true
      },
      password: {
        description: 'password is required',
        message: 'password is required',
        type: 'string',
        required: true
      }
    }
  })
}
