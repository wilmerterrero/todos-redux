import {
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    START_GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR
} from '../types';

import axiosClient from '../config/axios';

export function createNewTodoAction(todo) {
    return async (dispatch) => {
        dispatch( addTodo() );

        try {

            await axiosClient.post('/todos', todo);

            dispatch( addTodoSucces(todo) );

        } catch (error) {

            console.log(error);
        
            dispatch( addTodoError(true) );

        }
    }
}

const addTodo = () => ({
    type: ADD_TODO,
    payload: true
})

const addTodoSucces = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: todo
})

const addTodoError = status => ({
    type: ADD_TODO_ERROR,
    payload: status
})

export function getTodosActions() {
    return async (dispatch) => {
        dispatch( startGetTodos() )

        try {
            const response = await axiosClient.get('/todos');

            dispatch( getTodosSucces(response.data) )

        } catch (error) {
            
            dispatch( getTodosError(true) )

        }

    }
}

const startGetTodos = () => ({
    type: START_GET_TODOS,
    payload: true
})

const getTodosSucces = todos => ({
    type: GET_TODOS_SUCCESS,
    payload: todos
})

const getTodosError = status => ({
    type: GET_TODOS_ERROR,
    payload: status
})