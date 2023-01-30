import { APPEND_MOVIE_LIST, FETCH_MOVIE_LIST_FAILURE, FETCH_MOVIE_LIST_REQUEST, FETCH_MOVIE_LIST_SUCCESS, SET_MOVIE_SEARCH_PARAMS } from '../types/movieListTypes';

export const setMovieSearchParams = (params) => ({
  type: SET_MOVIE_SEARCH_PARAMS,
  payload: params,
});

export const fetchMovieListRequest = {
  type: FETCH_MOVIE_LIST_REQUEST,
};

export const fetchMovieListSuccess = (payload) => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  payload,
});

export const fetchMovieListFailure = {
  type: FETCH_MOVIE_LIST_FAILURE,
};

export const appendMovieList = (payload) => ({
  type: APPEND_MOVIE_LIST,
  payload,
});
