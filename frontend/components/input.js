import { h, text } from '../../node_modules/hyperapp/index.js';

const duration = '500ms';
export const CLASSES = {
  _: 'transition-colors animate-pulse',
  beam: 'border-r border-black',
  block: 'bg-gray-900 text-white inline-block',
  underline: 'border-b border-black',
};

export const initialState = (autofocus = false) => ({
  value: '',
  cursor: 0,
  style: 'block',
  focused: autofocus,
  autofocus,
});

const valueAction = (action) => (_, event) => {
  const { selectionEnd, value } = event.target;
  const attrs = { cursor: selectionEnd, value };
  return [
    action,
    attrs,
  ];
};

const cursorAction = (action) => (_, event) => {
  const { selectionEnd } = event.target;
  const attrs = { cursor: selectionEnd };
  return [
    action,
    attrs,
  ];
};

const focusAction = (focus, action) => () => {
  return [
    action,
    { focus },
  ];
};

export const input = ({ value, cursor, style, autofocus, focus }, { oninput }) => {
  const before = value.slice(0, cursor);
  const at = value.slice(cursor, cursor + 1);
  const after = value.slice(cursor + 1);

  console.log({
    at,
    after,
    value,
    length: value.length,
    cursor,
  });

  return h('label', {
    class: 'font-mono block w-full',
  }, [
    h('input', {
      type: 'text',
      value,
      // class: 'invisible absolute',
      class: 'block',
      autofocus,
      oninput: valueAction(oninput),
      onkeydown: cursorAction(oninput),
      onkeyup: cursorAction(oninput),
      onfocusin: focusAction(true, oninput),
      onfocusout: focusAction(false, oninput),
    }),
    h('div', {
      class: 'w-full whitespace-pre-line',
    }, [
      text(before),
      h('span', { class: focus ? CLASSES[style] : '' }, text(at === ' ' ? '\u00A0' : at)),
      text(after),
      (value.length === cursor) && h('span', { style: { 'animation-duration': duration }, class: `${CLASSES._} ${CLASSES[style]} text-transparent select-none ${!focus ? 'bg-transparent' : ''}` }, text('█')),
    ]),
  ]);
};
