import React, { useState } from 'react';

import './index.less';

export default function Application() {
  const [stateValue, setStateValue] = useState<number>(0);

  const raiseValueAdd = () => {
    setStateValue(stateValue + 1);
  };

  return (<div className="container">
    <div>hello world</div>
    <div className="actions">
      <div>{stateValue}</div>
      <div><button onClick={raiseValueAdd}>add</button></div>
    </div>
  </div>);
}