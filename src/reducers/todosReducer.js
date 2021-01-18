import {
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    START_GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR
} from '../types';

const initialState = {
    todos: [],
    error: null,
    loading: false
}

function todosReducer(state = initialState, action) {
    switch (action.type) {
        
        case ADD_TODO:
        case START_GET_TODOS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [ ...state.todos, action.payload ]
            }
        case ADD_TODO_ERROR:
        case GET_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_TODOS_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null,
                todos: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;