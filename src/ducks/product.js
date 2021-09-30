import {products} from '../../data/dummy-data';

const initialState = {
  items: products,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};

export default reducer;
