import * as repo from '../repositories/user'
import * as validator from '../validators/auth'

export const createUser = async (payload) => {

  const req = {
    email: payload.email,
    password : payload.password,
    phone: payload.phone,
  }

  const error = validator.authValidator(req);
  
  if(error) {
    throw new Error(error.message);
  }

  const user = await repo.FindUser({ email: payload.email });

  if (user) {
    throw new Error('Email Already Exist');
  }

  return repo.CreateUser(req);
}

export const findUser = async (payload) => {

  const req = {
    email: (payload.email).toLowerCase(),
    password: (payload.password).toLowerCase(),
  }

  const error = validator.authValidator(req);
  
  if(error) {
    throw new Error(error.message);
  }
  const user = await repo.FindUser(req);

  if (user)
    return user;
  throw new Error('No User Found');
  
}