import { FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_LIST_FAILURE, SET_MOVIE_SEARCH_PARAMS, FETCH_MOVIE_LIST_REQUEST, APPEND_MOVIE_LIST } from '../types/movieListTypes';

const initalState = {
  loading: false,
  error: false,
  pageNumber: 1,
  movieSearchParams: '',
  movieList: [],
  expandedCardIndex: null
};

const movieListReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_MOVIE_SEARCH_PARAMS:
      return {
        ...state,
        movieSearchParams: action.payload,
      };

    case FETCH_MOVIE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case FETCH_MOVIE_LIST_SUCCESS:
      const movieList = action.payload;
      return {
        ...state,
        movieList,
        loading: false,
        error: false,
      };

    case FETCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case APPEND_MOVIE_LIST:
      return {
        ...state,
        expandedCardIndex: action.payload,
      };

    default:
      return state;
  }
};

export default movieListReducer;
