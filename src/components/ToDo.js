import React from 'react'

function ToDo({ todos }) {

    const { name, date, completed } = todos;

    return (
        <div>
            <ul>
                <li>{ name }</li>
                <li>{ date }</li>
                <li>{ completed ? "Completed ✅" : "Incompleted ❌" }</li>
            </ul>
        </div>
    )
}

export default ToDo
