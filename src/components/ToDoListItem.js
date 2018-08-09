import React from 'react';

export default class ToDoListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.toDoTitle}</p>
        <button onClick={(e) => {
          this.props.handleRemoveToDo(this.props.index)
        }}>
          Remove
        </button>
      </div>
    );
  }
};
