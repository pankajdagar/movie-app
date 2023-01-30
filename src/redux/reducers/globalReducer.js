import { TOGGLE_MOBILE_SIDEBAR } from '../types/globalTypes';

const initalState = {
  isSideBarOpen: false,
};

const globalReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    default:
      return state;
  }
};

export default globalReducer;
