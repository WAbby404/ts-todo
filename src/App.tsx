import './App.css';
import InputBox from './components/InputBox';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [ allTodos, setAllTodos ] = useState<string[]>([]);

  const [ inputValue, setInputValue ] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
    // console.log(inputValue);
  }

  const deleteTodo = (id: number) => {
    const newTodos = allTodos.slice();
    newTodos.splice(id, 1);
    setAllTodos(newTodos);
  }

  const editTodo = (id: number, value: string) => {
    setInputValue(value);
    deleteTodo(id);
  }

  const handleSubmit = (text: string) => {
    // console.log(text);
    const newTodoArray = allTodos;
    newTodoArray.push(text);
    setAllTodos(newTodoArray);
    // console.log(allTodos);
    setInputValue('');
  }

  return (
    <div className="App">
      <header>
        <h1>Write your Todo:</h1>
        <InputBox inputValue={inputValue} handleSubmitInput={handleSubmit} handleChange={handleChange}>Type here</InputBox>
        {allTodos.map((todo, index) => {
          return (
            <Todo text={todo} deleteTodo={deleteTodo} editTodo={editTodo} key={index} id={index} allTodos={allTodos} />
          )
        })}
      </header>
    </div>
  );
}

export default App;
