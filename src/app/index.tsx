import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <pre>{count}</pre>
      <div>
        <button onClick={() => setCount((prev: number) => prev + 1)}>+1</button>
      </div>
    </div>
  );
}

render(<App />, document.querySelector('#app'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
