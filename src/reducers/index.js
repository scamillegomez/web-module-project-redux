import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const reducer = combineReducers({
    movies: movieReducer,
    favorites: favoritesReducer
})

export default reducer;