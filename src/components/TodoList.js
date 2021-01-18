import { useEffect } from 'react';
import ToDo from './ToDo';

import { useSelector, useDispatch } from 'react-redux';
import { getTodosActions } from '../actions/todosActions';

function TodoList() {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadTodos = () => dispatch( getTodosActions() );
        loadTodos();
        //eslint-disable-next-line
    }, [])

    const todos = useSelector( state => state.todos.todos )

    return (
        <div className="todo-card-list">
            {
                todos.length === 0 ? 'Any todo yet 😥'
                    :
                        todos.map(todo => (
                            <ToDo 
                                key = { todo.id }
                                todos = { todo }
                            />
                        ))
            }
        </div>
    )
}

export default TodoList
