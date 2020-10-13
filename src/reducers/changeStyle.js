import * as Types from "../constants/index";

var initialState = {
  size: 50,
};

const changeStyle = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_SIZE: {
      if (action.size >= 80) state.size = 80;
      else if (action.size <= 30) state.size = 30;
      else state.size = action.size;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default changeStyle;
