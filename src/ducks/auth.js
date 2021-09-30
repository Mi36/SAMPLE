const SET_USER = 'ducks/auth/SET_USER';
const CLEAR_USER = 'ducks/auth/CLEAR_USER';

const initialState = {
  email: '',
  idToken: null,
  accessToken: null,
  refreshToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
      };
    case CLEAR_USER:
      return {
        ...initialState,
      };
    default:
      return {...state};
  }
};

export default reducer;
