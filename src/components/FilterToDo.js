import React from 'react';

export default class FilterToDo extends React.Component {
  handleFilter = (e) => {
    e.preventDefault();

    const filter = e.target.value.trim();
    this.props.onChangeFilter(filter);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Filter"
          name="filter"
          onChange={this.handleFilter}
        />
      </div>
    );
  };
};

// refactor filter to do
// add event handler to recognise input value
// fire that value off to top level handler .toLowerCase()
// there array.filter to display matches
