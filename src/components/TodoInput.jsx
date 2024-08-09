import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    const addTask = () => {
        handleAddTodos(todoValue)
        setTodoValue('')
    }

    return (
        <header>
            <form onSubmit={addTask}>
                <input value={todoValue} onChange={(e) => {
                    setTodoValue(e.target.value)
                }} placeholder="Enter todo..." />

                <button disabled={todoValue === '' ? true : false} onClick={addTask}>Add</button>

            </form>
        </header>
    )
}