import React from 'react';
import ToDoListItem from './ToDoListItem';
import shortid from 'shortid';

const ToDoList = (props) => (
  <div>
    <h3>To Do List</h3>
    <div>
      {props.toDos.map((toDo) => (
        <ToDoListItem
          key={shortid.generate()}
          index={toDo.index}
          toDoTitle={toDo.title}
          handleRemoveToDo={props.handleRemoveToDo}
          handleDoneTrigger={props.handleDoneTrigger}
        />))}
    </div>
  </div>
);

export default ToDoList;
