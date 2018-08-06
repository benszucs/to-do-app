import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => (
  <div>
    <h3>To Do List</h3>
    <ul>
      <ToDoListItem />
      <ToDoListItem />
    </ul>
  </div>
);

export default ToDoList;
