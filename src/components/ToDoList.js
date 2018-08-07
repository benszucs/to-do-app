import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = (props) => (
  <div>
    <h3>To Do List</h3>
    <div>
      {props.toDos.map((toDo) => {
        return <ToDoListItem key={toDo} toDoTitle={toDo}/>;
      })}
    </div>
  </div>
);

export default ToDoList;
