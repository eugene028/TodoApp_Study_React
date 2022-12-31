import './App.css';
import List from './components/List';
import { useState } from 'react';
import Form from './components/Form';

//객체 리터럴 표현을 반환하기 위해서는 괄호 안에 한번 더 넣어야 한다. 
function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(),
      title : value,
      completed : false,
    };

    setTodo(prev => [...prev, newTodo]);
    setValue('');
  }

  return (
    <div className ="flex items-center justify-center w-screen h-screen bg-blue-300">
      <div className = "w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className='flex justify-between mb-3'>
            <h1>할 일 목록</h1>
        </div>
        <List todo = {todo} setTodo = {setTodo}/>
        <Form value = {value} setValue = {setValue} handleSubmit = {handleSubmit}/>
      </div>
    </div>
  );
}

export default App;
