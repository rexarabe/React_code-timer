import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './counter.css'

function Counter(props) {
  const {step} = props;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  };

  const decrement = () => {
    setCount(count-1);
  };

   return(
        <div className="counter">
          <h1>{count}</h1>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
    );
  }

export default Counter;