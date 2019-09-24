export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';

export const addTodoItem = item => ({
    type: ADD_TODO_ITEM,
    payload: { item }
});

export const removeTodoItem = id => ({
    type: REMOVE_TODO_ITEM,
    payload: { id }
});