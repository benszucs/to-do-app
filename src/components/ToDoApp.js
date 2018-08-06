import React from 'react';

import Header from './Header';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoList from './ToDoList';
import ListButtons from './ListButtons';

export default class ToDoApp extends React.Component {
  state = {

  };
  render() {
    return (
      <div>
        <Header />
        <AddToDo />
        <FilterToDo />
        <ToDoList />
        <ListButtons />
      </div>
    );
  };
};
