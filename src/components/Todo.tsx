type TodoProps = {
    text: string
    key: number
    id: number
    deleteTodo: (id: number) => void
    editTodo: (id: number, text: string) => void
    allTodos: string[]
}


function Todo({text, id, deleteTodo, editTodo, allTodos}: TodoProps) {
    return (
        <div>
            <h2>{text}</h2>
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={() => editTodo(id, text)}>Edit</button>
        </div>
    );
}

export default Todo;