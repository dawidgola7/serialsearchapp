import {
  FETCH_REQUEST_SERIES,
  FETCH_SUCCESS_SERIES,
  SET_DAY_OF_WEEK,
} from "../actions";
import descendSort from "../utilities/descendSort";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST_SERIES:
      return { ...state, loading: true };
    case FETCH_SUCCESS_SERIES:
      return { ...state, serials: descendSort(action.serials), loading: false };
    case SET_DAY_OF_WEEK:
      return { ...state, day: action.day };
    default:
      return state;
  }
};

export default reducer;
