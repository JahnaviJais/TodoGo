import React, { useState } from "react";
import { useTodo } from "../Context";
function TodoItem({ todo }) {
    const [isTodoEdit, setTodoEdit] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = ()=> {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setTodoEdit(false)
    }

    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
    }
    return (
        <div
            className={`flex border border-white rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 bg-pink-400 text-white ${
                todo.completed ? "bg-pink-300" : "bg-pink-700"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEdit ? "border-white px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEdit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-white justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEdit) {
                        editTodo();
                    } else setTodoEdit((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEdit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-white justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
