
import movies from '../data.js';
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

 const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            const exists = state.favorites.some(item=> item.id === action.payload.id);
            if(exists){
                return state;
            }
            return {
                ...state,
                favorites: [...state.favorites,action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer;
