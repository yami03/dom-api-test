import React, { useState } from 'react';
import { render } from 'react-dom';

// React Without JSX
// 컴파일 설정을 하고 싶지 않을 때 사용
// https://ko.reactjs.org/docs/react-without-jsx.html#___gatsby
// React.createElement(component, props, ...children)

// const e = React.createElement;

function App() {
  const [count, setCount] = useState<number>(0);

  return React.createElement('div', null, [
    React.createElement('pre', null, count),
    React.createElement(
      'div',
      null,
      React.createElement('button', { onClick: () => setCount((prev: number) => prev + 1) }, '+1'),
    ),
  ]);
}

render(React.createElement(App), document.getElementById('app'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
