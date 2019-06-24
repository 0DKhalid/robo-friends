import { CHANGE_SEARCH_FILD } from "./actionType";

const initialState = {
  searchFild: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FILD:
      return {
        ...state,
        searchFild: action.type
      };

    default:
      return state;
  }
};
