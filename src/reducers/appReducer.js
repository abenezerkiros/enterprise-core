import { SET_APP_DATA } from '../actions/appActions';

const initialState = {
  data: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
