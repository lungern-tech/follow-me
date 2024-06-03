import { toggleTheme } from '@lib/toggleTheme';

import "src/index"

console.log('content script loaded');

let timer = -1
document.addEventListener("selectionchange", (ev) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    confirmSelect()
  }, 1000)
})


void toggleTheme();
