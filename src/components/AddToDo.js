import React from 'react';

export default class AddToDo extends React.Component {
  state = {
    error: undefined
  };
  handleAddToDo = (e) => {
    e.preventDefault();

    const toDo = e.target.elements.toDo.value.trim();
    const error = this.props.handleAddToDo(toDo);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.toDo.value = "";
    }
  };
  render () {
    return (
      <div className="mr-1">
        {this.state.error && <p>{this.state.error}</p>}
        <form
          onSubmit={this.handleAddToDo}
        >
          <input
            type="text"
            name="toDo"
            className="form--input mr-1"
          />
          <button className="button">Add To Do</button>
        </form>
      </div>
    );
  }
};
