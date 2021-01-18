import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewTodoAction } from '../actions/todosActions';

function TodoForm() {

    const [todo, todoState] = useState({
        name: "",
        date: "",
        completed: false
    });

    const { name, date } = todo;

    function onChange(e) {
        todoState({
            ...todo,
            [e.target.name] : e.target.value
        });
    }

    const dispatch = useDispatch();

    const addTodo = todo => dispatch( createNewTodoAction(todo) );

    function onSubmit(e) {
        e.preventDefault();

        if (name.trim() === '' || date === null) return;

        todoState(todo);

        addTodo(todo);

        todoState({
            name: "",
            date: "",
            completed: false
        })

    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                placeholder="Todo name"
                onChange={onChange}
                value={name}
            />
            <label htmlFor="date">Date</label>
            <input 
                type="date"
                name="date"
                onChange={onChange}
                value={date}
            />
            <button type="submit">Create</button>
        </form>
    )
}

export default TodoForm
