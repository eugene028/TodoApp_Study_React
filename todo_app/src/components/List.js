import React from 'react';

const List = ({todo, setTodo}) => {
    const handleCompleChange = (id) => {
        let newTodoData = todo.map((data) => {
          if (data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        });
        setTodo(newTodoData);
        console.log(todo);
      }
    
      const handleClick = (id) => {
        let newTodoData = todo.filter((data) => data.id !== id);
        setTodo(newTodoData);
      }
    
    return (
        <div>
            {todo.map((data) => (
            <div key = {data.id}>
                <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded row'>
                    <div className = "items-center">
                        <input 
                        className = 'm-2'
                        type ="checkbox" 
                        onChange={() => handleCompleChange(data.id)}
                        defaultChecked={false}/>
                        <span className={data.completed ? 'line-through' : undefined } >{data.title}</span>
                    </div>
                    <div className = "items-center">
                        <button className = "px-4 py-2 float-right" onClick={()=>handleClick(data.id)}>x</button>
                    </div>               
                </div>
          </div> )) }

        </div>
    );
};

export default List;