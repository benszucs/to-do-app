import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = (props) => (
  <div>
    <h3>To Do List</h3>
    <div>
      {props.toDos.map((toDo , index) => (
        <ToDoListItem
          key={index}
          index={index}
          toDoTitle={toDo}
          handleRemoveToDo={props.handleRemoveToDo}
        />))}
    </div>
  </div>
);

export default ToDoList;
