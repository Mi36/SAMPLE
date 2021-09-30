const initialState = {
  usersList: [
    {email: 'test@test1.com', password: '1234561'},
    {email: 'test@test2.com', password: '1234562'},
    {email: 'test@test3.com', password: '1234563'},
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};

export default reducer;
