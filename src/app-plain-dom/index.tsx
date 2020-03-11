const container: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#app');
const pre: HTMLPreElement = document.createElement('pre');
const div: HTMLDivElement = document.createElement('div');
const button: HTMLButtonElement = document.createElement('button');
const text: Text = document.createTextNode('+1');

let number: number = 0;
const startText: Text = document.createTextNode('0');

/* TODO react, innerHTML, innerText를 사용하지 않고, app 과 동일한 동작을 만드시오 */

// DOM을 잡아서 숫자를 넣고.. 그리고 클릭할때마다 업데이트가 필요함
// 왜 innerHTML는 안되고 append 되지?
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue 얘도 안되겠지? startText.nodeValue = String(++number);
// 뭔가 DOM을 다시 그려야 할거 같음

container?.append(pre, div);
div.append(button);
pre.append(startText);
button.append(text);

button.addEventListener('click', function() {
  if (pre.firstChild) pre.removeChild(pre.firstChild);

  const nextNumber: Text = document.createTextNode(String(++number));

  pre.append(nextNumber);
});

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
