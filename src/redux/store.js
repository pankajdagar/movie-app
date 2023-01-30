import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import globalReducer from './reducers/globalReducer';
import movieListReducer from './reducers/movieListReducer';

export default configureStore({
  reducer: {
    movieList: movieListReducer,
    global: globalReducer
  },
  middleware: [thunk],
  devTools: true
});