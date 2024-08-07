import { SET_MENU } from '../actions/menuActions';

const initialState = {
  items: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
