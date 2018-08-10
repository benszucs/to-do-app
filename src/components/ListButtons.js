import React from 'react';

const ListButtons = (props) => (
  <div>
    <button onClick={props.handleClearAll}>Clear</button>
    <button onClick={props.handleResetList}>Reset</button>
  </div>
);

export default ListButtons;
