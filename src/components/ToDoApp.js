import React from 'react';

import Header from './Header';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoList from './ToDoList';
import ListButtons from './ListButtons';

import shortid from 'shortid';

export default class ToDoApp extends React.Component {
  state = {
    toDos: [],
    filter: ""
  };
  handleAddToDo = (toDo) => {
    if (!toDo) {
      return "Nothing was added!";
    }
    this.setState((prevState) => ({
      toDos: prevState.toDos.concat([{
        title: toDo,
        index: shortid.generate(),
        done: false
      }])
    }));
  };
  handleToggleDone = (doneIndex) => {
    for (let id in this.state.toDos) {
      if (this.state.toDos[id].index === doneIndex) {
        this.state.toDos[id].done = !this.state.toDos[id].done;
        this.forceUpdate();
      }
    }
  };
  handleRemoveToDo = (removeIndex) => {
    this.setState((prevState) => ({
      toDos: prevState.toDos.filter((toDo) => toDo.index !== removeIndex)
    }));
  };
  handleClearAll = () => {
    this.setState(() => ({ toDos: [] }))
  };
  handleResetList = () => {
    this.setState(() => ({
      toDos: [{
        title: "Finish Andrew Mead's React/Redux course",
        index: shortid.generate(),
        done: true,
      },
      {
        title: "Learn how to deploy apps (Heroku/Firebase)",
        index: shortid.generate(),
        done: false
      },
      {
        title: "Get more familiar with Webpack",
        index: shortid.generate(),
        done: false
      },
      {
        title: "Start Node.js/Express/MongoDB course on Udemy",
        index: shortid.generate(),
        done: false
      }]
    }));
  };
  onChangeFilter = (newFilter) => {
    this.setState(() => ({ filter: newFilter }))
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('toDos');
      const toDos = JSON.parse(json);
      if (toDos) {
        this.setState(() => ({toDos}));
      }
    } catch (e) {

    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos.length !== this.state.toDos.length) {
      const json = JSON.stringify(this.state.toDos);
      localStorage.setItem('toDos', json);
    }
  };

  render() {
    let list = this.state.toDos.filter(toDo => toDo.title.toLowerCase().includes(this.state.filter.toLowerCase()));
    return (
      <div>
        <Header />
        <div className="container">
          <div className="form">
            <AddToDo
              handleAddToDo={this.handleAddToDo}
            />
            <FilterToDo
              onChangeFilter={this.onChangeFilter}
            />
          </div>
          <ToDoList
            toDos={list}
            handleRemoveToDo={this.handleRemoveToDo}
            handleToggleDone={this.handleToggleDone}
          />
          <ListButtons
            handleClearAll={this.handleClearAll}
            handleResetList={this.handleResetList}
          />
        </div>
      </div>
    );
  };
};
