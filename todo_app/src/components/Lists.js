import React from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from './List';

const Lists = ({todo, setTodo}) => {


      const handleEnd = (result) => {
        console.log(result);

        if(!result.destination) return;
        const newTodoData = todo;

        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
        newTodoData.splice(result.destination.index, 0 , reorderedItem);
        setTodo(newTodoData);
      }
    
    return (
        <div>
          <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId='todo'>
                {(provided) => (
                  <div {...provided.droppableProps} ref = {provided.innerRef}>
                    {todo.map((data, index) => (
                      <Draggable
                        key = {data.id}
                        draggableId={data.id.toString()}
                        index = {index}
                        >
                        {(provided, snapshot) => ( 
                          <List 
                            key = {data.id}
                            id = {data.id}
                            title = {data.title}
                            completed={data.completed}
                            todo = {todo}
                            setTodo = {setTodo}
                            provided={provided}
                            snapshot={snapshot}/>
                        )}
                    </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
          </DragDropContext>
        </div>
    );
};

export default Lists;