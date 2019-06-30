import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PIENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILD
} from './actionType';

const initialStateSearch = {
  searchFields: ''
};

export const searchReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchFields: action.payload
      };

    default:
      return state;
  }
};

const initialStateFetchRobots = {
  robots: [],
  isPiending: false,
  error: ''
};

export const fetchRobotsReducer = (
  state = initialStateFetchRobots,
  action = {}
) => {
  switch (action.type) {
    case FETCH_ROBOTS_PIENDING:
      return {
        ...state,
        isPiending: true
      };

    case FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPiending: false
      };

    case FETCH_ROBOTS_FAILD:
      return {
        ...state,
        isPiending: false,
        error: action.payload
      };

    default:
      return state;
  }
};
