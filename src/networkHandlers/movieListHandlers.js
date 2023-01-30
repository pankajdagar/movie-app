import { data } from '../globalConstants/data';
import { appendMovieList, fetchMovieListFailure, fetchMovieListRequest, fetchMovieListSuccess, setMovieSearchParams } from '../redux/actions/moviesListActions';

// Function to mock api call to get movie data
const getMovieData = (searchParam = '') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (searchParam.length) {
        const searchData = data.filter((item) => item.Title.toLowerCase().includes(searchParam.toLowerCase()));
        resolve(searchData);
      } else {
        resolve(data);
      }
    }, 500);
  });
};

export const getMovieList =
  (searchParam = '') =>
  async (dispatch) => {
    dispatch(appendMovieList(null));
    dispatch(fetchMovieListRequest);
    dispatch(setMovieSearchParams(searchParam));
    try {
      dispatch(fetchMovieListRequest);
      const data = await getMovieData(searchParam);
      dispatch(fetchMovieListSuccess(data));
    } catch (e) {
      dispatch(fetchMovieListFailure);
    }
  };
