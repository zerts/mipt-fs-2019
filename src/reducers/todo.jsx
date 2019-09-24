import {
	ADD_TODO_ITEM,
	REMOVE_TODO_ITEM
} from "../actions";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO_ITEM:
			return [...state, action.payload.item];
		case REMOVE_TODO_ITEM:
			return state.filter(item => item.id !== action.payload.id);
		default:
			return state;
	}
};