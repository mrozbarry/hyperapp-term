import { composable, select, selectAll, replace, merge, concat } from './node_modules/composable-state/src/index.js';
import * as input from './components/input.js';

export const initialState = () => ({
  processes: [],
  prompt: {
    cwd: '~',
    command: input.initialState(),
  },
});

export const setPromptCommand = (state, command) => composable(
  state,
  select('prompt.command', merge(command)),
);

export const submitPrompt = (state) => [
  composable(
    state,
    selectAll({
      'processes': concat({
        command: state.prompt.command.value,
        output: [],
      }),
      'prompt.command': replace(input.initialState()),
    }),
  ),
];
