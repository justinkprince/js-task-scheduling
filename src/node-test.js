const { taskUtils } = require("./task-utils");

taskUtils.taskSetImmediate(() => console.log("taskSetImmediate"));
taskUtils.taskSetTimeout(() => console.log("taskSetTimeout"));
taskUtils.taskMessageChannel(() => console.log("taskMessageChannel"));
taskUtils.microtask(() => console.log("microtask"));
taskUtils.nanotask(() => console.log("nanotask"));
taskUtils.synchronous(() => console.log("synchronous"));
