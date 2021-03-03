const { taskUtils } = require("./task-utils");

taskUtils.taskSetImmediate(() => console.log("taskSetImmediate 1"));
taskUtils.taskSetTimeout(() => console.log("taskSetTimeout 1"));
taskUtils.nanotask(() => console.log("nanotask 1"));
taskUtils.synchronous(() => console.log("synchronous 1"));
taskUtils.microtaskQueueMicrotask(() =>
  console.log("microtaskQueueMicrotask 1")
);
taskUtils.microtaskPromise(() => console.log("microtaskPromise 1"));
taskUtils.taskMessageChannel(() => console.log("taskMessageChannel 1"));
taskUtils.taskSetImmediate(() => console.log("taskSetImmediate 2"));
taskUtils.microtaskPromise(() => console.log("microtaskPromise 2"));
taskUtils.nanotask(() => console.log("nanotask 2"));
taskUtils.synchronous(() => console.log("synchronous 2"));
taskUtils.microtaskPromise(() => console.log("microtaskPromise 3"));
taskUtils.synchronous(() => console.log("synchronous 3"));
