import React from 'react';

const ListButtons = (props) => (
  <div className="form mt-1">
    <button
      onClick={props.handleClearAll}
      className="button mr-1"
    >Clear</button>
    <button
      onClick={props.handleResetList}
      className="button"
    >Reset</button>
  </div>
);

export default ListButtons;
