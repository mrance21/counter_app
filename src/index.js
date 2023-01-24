import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

import './styles.scss';

// const storeInLocalStorage = (count) => {
//   localStorage.setItem('counterState', JSON.stringify({ count }));
//   console.log(localStorage);
// };

// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);
//     console.log(localStorage, storage)
//     if (storage) return JSON.parse(storage).value;
//     return initialState;
//   };

//   const [value, setValue] = useState(get())

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify({ value }))
//     console.log(localStorage)
//   }, [value])

//   return [value, setValue]
// }

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  let message = '';
  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;
  console.log(countRef.current);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(`Count ${count}`)
  //   }, 2000)
  //   return () => clearInterval(id)
  // }, [count])

  return (
    <main className="Counter">
      <p>Message: {message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
};

render(<Counter max={35} step={5} />, document.getElementById('root'));
