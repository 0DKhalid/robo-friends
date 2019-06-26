import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PIENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILD
} from "./actionType";

export const setSearchFields = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const fetchRobots = () => dispatch => {
  dispatch({ type: FETCH_ROBOTS_PIENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: FETCH_ROBOTS_FAILD, payload: err }));
};
