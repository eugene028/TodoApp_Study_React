import './App.css';
import Lists from './components/Lists';
import { useCallback, useState } from 'react';
import Form from './components/Form';

const initialTodo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];

//객체 리터럴 표현을 반환하기 위해서는 괄호 안에 한번 더 넣어야 한다. 
function App() {
  const [todo, setTodo] = useState(initialTodo);
  const [value, setValue] = useState('');

  const handleClick = useCallback((id) => {
    let newTodoData = todo.filter((data) => data.id !== id);
    setTodo(newTodoData);
    localStorage.setItem('todo', JSON.stringify(newTodoData));
  },[todo])

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(),
      title : value,
      completed : false,
    };
    setTodo(prev => [...prev, newTodo]);
    localStorage.setItem('todo', JSON.stringify([...todo, newTodo]));
    setValue('');
  }

  const handleRemoveClick = () => {
    setTodo([]);
    localStorage.setItem('todo', JSON.stringify([]));
  }

  return (
    <div className ="flex items-center justify-center w-screen h-screen bg-blue-300">
      <div className = "w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className='flex justify-between mb-3'>
            <h1>할 일 목록</h1> 
            <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists handleClick = {handleClick} todo = {todo} setTodo = {setTodo}/>
        <Form value = {value} setValue = {setValue} handleSubmit = {handleSubmit}/>
      </div>
    </div>
  );
}

export default App;
