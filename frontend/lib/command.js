export const make = (tabId, cwd, command, id = null, now = null) => ({
  tabId,
  cwd,
  command,
  id: id || Math.random().toString(36).slice(2),
  pid: null,
  output: [],
  exitCode: null,
  startedAt: now || Date.now(),
  endedAt: null,
});
