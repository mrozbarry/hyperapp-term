import { h, text } from '../../node_modules/hyperapp/index.js';
import { prompt } from './prompt.js';
import * as actions from '../actions.js';

export const view = (state) => {
  return h('main', {
    class: 'w-full vh-full',
  }, [
    ...state.processes.map((process) => {
      return h('h1', {}, text(process.command));
    }),
    prompt({
      cwd: state.prompt.cwd,
      command: state.prompt.command,
      onCommandInput: actions.setPromptCommand,
      onsubmit: actions.submitPrompt,
    }),
    h('pre', {}, text(JSON.stringify(state, null, true))),
  ]);
};
