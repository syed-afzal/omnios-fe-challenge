import React, { Fragment, useState, useRef, useEffect } from 'react';
import './reducer.scss';

function usePrevious(count) {
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  });
  return prevCount.current;
}

function Reducers() {
  const [counter, setCounter] = useState(0);
  const prevCounter = usePrevious(counter);

  return (
    <Fragment>
      <div className="main-class">
        <h1>Counter Value With Ref: {prevCounter}</h1>
        <h1>Counter Value Actual: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      </div>
    </Fragment>
  );
}

export default Reducers;
