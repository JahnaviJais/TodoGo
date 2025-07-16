import React, { useState } from "react"
import { useTodo } from "../Context"
function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

        const add =(e)=> {
            e.preventDefault()

            if(!todo) return

            addTodo({todo, completed:false})
            setTodo("")
        }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-pink-600 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-7 py-1 bg-pink-700 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

