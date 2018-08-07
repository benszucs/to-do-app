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
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form
          onSubmit={this.handleAddToDo}
        >

          <input type="text" name="toDo"/>
          <button>Add To Do</button>
        </form>
      </div>
    );
  }
};
