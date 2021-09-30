import {users} from '../../data/dummy-data';

const SET_USER = 'ducks/auth/SET_USER';
const CLEAR_USER = 'ducks/auth/CLEAR_USER';
const REGISTER_USER = 'ducks/auth/REGISTER_USER';

const initialState = {
  email: null,
  users: users,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const {email} = action;
      return {
        ...state,
        email,
      };
    case CLEAR_USER:
      return {
        ...state,
        email: null,
      };

    case REGISTER_USER:
      return {
        ...state,
        users: [...users, action.user],
      };
    default:
      return {...state};
  }
};

export const setUser = (email, password) => {
  return dispatch => {
    dispatch({
      type: SET_USER,
      email,
      password,
    });
  };
};

export const userRegister = user => {
  return dispatch => {
    dispatch({
      type: REGISTER_USER,
      user,
    });
  };
};

export const clearUser = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_USER,
    });
  };
};

export default reducer;
