import { composable, select, selectAll, replace, merge, concat } from '../node_modules/composable-state/src/index.js';
import * as input from './components/input.js';

export const initialState = () => ({
  processes: [],
  prompt: {
    cwd: '~',
    command: ''
  },
});

export const setPromptCommand = (state, command) => composable(
  state,
  select('prompt.command', replace(command)),
);

export const submitPrompt = (state, event) => {
  event.preventDefault();
  return [
    composable(
      state,
      selectAll({
        'processes': concat({
          command: state.prompt.command,
          output: [],
        }),
        'prompt.command': replace(''),
      }),
    ),
  ];
};
