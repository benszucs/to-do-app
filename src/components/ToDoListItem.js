import React from 'react';

export default class ToDoListItem extends React.Component {
  state = {
    done: false
  };
  handleDoneTrigger = () => {
    this.setState((prevState) => ({ done: !prevState.done }));
  };
  render() {
    return (
      <div>
        <p
          className={this.state.done ? "done" : ""}
        >{this.props.toDoTitle}</p>
        <button>Remove</button>
        <button onClick={this.handleDoneTrigger}>Done</button>
      </div>
    );
  }
};
