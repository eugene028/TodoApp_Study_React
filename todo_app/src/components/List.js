import React from 'react';

const List = React.memo(({
    id, title, completed, todo, setTodo, provided, snapshot, handleClick}) => {
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
    
    return (
        <div>
            <div key = {id} 
                        {...provided.draggableProps} ref = {provided.innerRef} {...provided.dragHandleProps}>
                            <div className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center 
                            justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded row`}>
                                <div className = "items-center">
                                    <input 
                                    className = 'm-2'
                                    type ="checkbox" 
                                    onChange={() => handleCompleChange(id)}
                                    defaultChecked={false}/>
                                    <span className={completed ? 'line-through' : undefined } >
                                      {title}
                                    </span>
                                </div>
                                <div className = "items-center">
                                    <button className = "px-4 py-2 float-right" 
                                    onClick={()=>handleClick(id)}
                                    >
                                      x
                                    </button>
                                </div>               
                            </div>
                        </div> 
        </div>
    );
});

export default List;