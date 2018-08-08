import React from 'react';

export default class ToDoListItem extends React.Component {
  state = {
    done: false
  };
  handleDoneTrigger = () => {
    this.setState((prevState) => ({ done: !prevState.done }));
  };
  shouldComponentUpdate(nextProps) {
    return (this.props.done === nextProps.done);
  };
  render() {
    return (
      <div>
        <p className={this.state.done ? "done" : ""}>
          {this.props.toDoTitle}
        </p>
        <button onClick={(e) => {
          this.props.handleRemoveToDo(this.props.index)
        }}>
          Remove
        </button>
        <button onClick={this.handleDoneTrigger}>Done</button>
      </div>
    );
  }
};
