import React, { Fragment, useState } from 'react';
import { usePrevious } from '../../components/common';
import './home.scss';

function Home() {
  const [counter, setCounter] = useState(0);
  const prevCounter = usePrevious(counter);

  // useEffect(() => {
  //   prevCounterRef.current = counter;
  // }, [counter]);

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

export default Home;
