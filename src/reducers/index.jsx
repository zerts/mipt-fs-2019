import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoReducer } from './todo';

const logger = store => next => action => {
	let result;
	console.groupCollapsed("dispatching", action.type);
	console.log('prev state', store.getState());
	console.log('action', action);
	result = next(action);
	console.log('next state', store.getState());
	console.groupEnd();
	return result;
};

const saver = store => next => action => {
	let result = next(action);
	localStorage['mipt-web'] = JSON.stringify(store.getState());
	return result;
};

const initStorage = (initialState = {}) => {
	return initialState =
		localStorage['mipt-web'] ?
			JSON.parse(localStorage['mipt-web']) :
			initialState;
};

export const storeFactory = (initialState = {}) => (
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({
			todo: todoReducer,
		}), initStorage(initialState)
	)
);