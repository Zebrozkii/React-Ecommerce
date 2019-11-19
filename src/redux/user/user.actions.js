import {UserActionTypes} from './user.types';

export const setCurrentUser = user =>({
  type:UserActionTypes.SET_CURRENT_USER, //need to be the exact same string from user reducer
  payload:user
});