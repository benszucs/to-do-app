import React from 'react';

export default class ToDoListItem extends React.Component {
  render() {
    return (
      <div className="to-do-items">
        <p className="to-do--text">{this.props.toDoTitle}</p>
        <button
          className="button button-mod"
          onClick={(e) => {
          this.props.handleRemoveToDo(this.props.index)
        }}>
          X
        </button>
      </div>
    );
  }
};
