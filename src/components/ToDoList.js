import React from 'react';
import ToDoListItem from './ToDoListItem';
import shortid from 'shortid';

const ToDoList = (props) => (
  <div className="mt-1">
    {/* <h3 className="to-do--title">To Do List</h3> */}
    <div>
      {props.toDos.map((toDo) => (
        <ToDoListItem
          key={shortid.generate()}
          index={toDo.index}
          toDoTitle={toDo.title}
          handleRemoveToDo={props.handleRemoveToDo}
          handleToggleDone={props.handleToggleDone}
          done={toDo.done}
        />))}
    </div>
  </div>
);

export default ToDoList;
