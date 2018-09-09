import React from 'react';

export default class ToDoListItem extends React.Component {
  render() {
    return (
      <div className="to-do-items">
        <p className="to-do--text">
          <span className={(this.props.done ? 'done' : '')}>{this.props.toDoTitle}</span>
        </p>
        <div className="buttons">
          <button
            className="button button-mod mr-1"
            onClick={(e) => {
            this.props.handleToggleDone(this.props.index)
          }}>
            {String.fromCharCode(10003)}
          </button>
          <button
            className="button button-mod"
            onClick={(e) => {
            this.props.handleRemoveToDo(this.props.index)
          }}>
            {String.fromCharCode(10007)}
          </button>
        </div>
      </div>
    );
  }
};
