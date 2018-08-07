import React from 'react';

import Header from './Header';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoList from './ToDoList';
import ListButtons from './ListButtons';

export default class ToDoApp extends React.Component {
  state = {
    toDos: []
  };
  handleAddToDo = (toDo) => {
    if (!toDo) {
      return "Nothing was added!";
    }
    this.setState((prevState) => ({
      toDos: prevState.toDos.concat([toDo])
    }));
  };
  handleRemoveToDo = (removeIndex) => {
    this.setState((prevState) => ({
      toDos: prevState.toDos.filter((toDo, index) => index !== removeIndex)
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <AddToDo
          handleAddToDo={this.handleAddToDo}
        />
        <FilterToDo />
        <ToDoList
          toDos={this.state.toDos}
          handleRemoveToDo={this.handleRemoveToDo}
        />
        <ListButtons />
      </div>
    );
  };
};
