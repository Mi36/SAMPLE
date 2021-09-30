const SET_USER = 'ducks/auth/SET_USER';
const CLEAR_USER = 'ducks/auth/CLEAR_USER';

const initialState = {
  email: null,
  password: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const {email, password} = action;
      return {
        email,
        password,
      };
    case CLEAR_USER:
      return {
        ...initialState,
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

export const clearUser = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_USER,
    });
  };
};

export default reducer;
