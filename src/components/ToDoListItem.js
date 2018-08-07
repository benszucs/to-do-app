import React from 'react';

const ToDoListItem = (props) => (
  <div>
    <p>{props.toDoTitle}</p>
    <button>Remove</button>
    <button>Done</button>
  </div>
);

export default ToDoListItem;
