const container: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#app');

/* TODO react, innerHTML를 사용하지 않고, app 과 동일한 동작을 만드시오 */

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
