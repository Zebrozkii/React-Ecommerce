export const setCurrentUser = user =>({
  type:'SET_CURRENT_USER', //need to be the exact same string from user reducer
  payload:user
});