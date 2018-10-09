import {} from '../actions/actionTypes';
import {ADD_PLACE, DELETE_PLACE} from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                        key: String(Math.random()),
                        name: action.placeName,
                        image: {
                            uri: "https://www.rd.com/wp-content/uploads/2018/04/lanai-400x400.jpg"
                        }
                    })

            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                })

            };


        default:
            return state;

    }

};

export default reducer;