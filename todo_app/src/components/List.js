import React from 'react';
import { useState } from 'react';

const List = React.memo(({id, title, completed, todo, setTodo, provided, snapshot, handleClick}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompleChange = (id) => {
        let newTodoData = todo.map((data) => {
          if (data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        });
        setTodo(newTodoData);
        localStorage.setItem('todo', JSON.stringify([...todo, newTodoData]));
      };
    
    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let newTodoData = todo.map(data => {
        if(data.id === id){
          data.title = editedTitle
        }
        return data;
      })
      setTodo(newTodoData);
      localStorage.setItem('todo', JSON.stringify(newTodoData));
      setIsEditing(false);
    }


      if (isEditing) {
        return (
          <div>
                <div className ='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded row'>
                    <form onSubmit={handleSubmit}>
                      <input 
                        value = {editedTitle}
                        onChange={handleEditChange}
                        className ="w-full px-3 py-2 mr-4 text-gray-500 rounded"/>
                    </form>
                  <div className = "items-center">
                      <button className = "px-4 py-2 float-right" 
                      onClick={() => setIsEditing(false)}
                      >
                        x
                      </button>
                      <button onClick = {handleSubmit} className = "px-4 py-2 float-right" 
                        type = "submit"
                      >
                        save
                      </button>
                  </div>               
              </div>
        </div>
        )
      } else {
        return (
          <div>
              <div key = {id} {...provided.draggableProps} ref = {provided.innerRef} {...provided.dragHandleProps}>
                <div className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded row`}>
                  <div className = "items-center">
                      <input 
                      type = "checkbox"
                      onChange={() => handleCompleChange(id)}
                      defaultChecked={completed}/>
                  {" "}
                  <span className = {completed ? "line-through" : undefined}>{title}</span>
                  </div>
                  <div className = "items-center">
                      <button className = "px-4 py-2 float-right" 
                      onClick={() => handleClick(id)}
                      >
                        x
                      </button>
                      <button className = "float-right px-4 py-2" onClick={() => setIsEditing(true)}
                      >
                        edit
                      </button>
                  </div>               
              </div>
          </div> 
      </div>
    );
  }
});

export default List;