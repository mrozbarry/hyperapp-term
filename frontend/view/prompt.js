import { h, text } from '../node_modules/hyperapp/index.js';
import { input } from '../components/input.js';

export const prompt = (props) => h('form', {
  class: 'flex w-full',
  onsubmit: props.onsubmit,
}, [
  h('button', {
    type: 'button',
    class: 'flex-shrink px-2',
  }, text(props.cwd)),

  input(props.command, {
    oninput: props.onCommandInput,
  }),
]);
