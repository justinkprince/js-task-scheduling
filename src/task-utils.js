/**
 * setTimeout() pushes the callback execution to the task queue.
 * Will be executed once the main thread execution is complete.
 */
const taskSetTimeout = (cb) => {
  setTimeout(cb, 0);
};

/**
 * MessageChannel's tasks are placed in the queue similarly to setTimeout
 * but are not subject to throttling, thus priority might be higher depending
 * on the browser.
 */
const taskMessageChannel = (cb) => {
  if (typeof MessageChannel !== "undefined") {
    const channel = new MessageChannel();
    channel.port1.postMessage(null);
    channel.port2.addEventListener(
      "message",
      () => {
        cb();
      },
      { once: true }
    );
    channel.port2.start();
  } else {
    console.log("!! MessageChannel not available");
  }
};

/**
 * setImmediate is a non-standard function implemented in IE only. It was ported
 * over to the NodeJS runtime and is similar to setTimeout with a 0 ms delay.
 * https://nodejs.dev/learn/understanding-setimmediate
 */
const taskSetImmediate = (cb) => {
  if (typeof setImmediate !== "undefined") {
    setImmediate(cb);
  } else {
    console.log("!! setImmediate not available");
  }
};

/**
 * Microtasks get fired right after its calling context exits but before returning control
 * back to the event loop. This version uses the queueMicrotask() function.
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
 */
const microtaskQueueMicrotask = (cb) => {
  if (typeof queueMicrotask !== "undefined") {
    queueMicrotask(cb);
  } else {
    console.log("!! queueMicrotask not available");
  }
};

/**
 * Microtasks get fired right after its calling context exits but before returning control
 * back to the event loop. This version uses Promises() and can be used when the
 * queueMicrotask() function is not available as a polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
 */
const microtaskPromise = (cb) => {
  if (typeof Promise !== "undefined") {
    Promise.resolve().then(() => cb());
  } else {
    console.log("!! Promise not available");
  }
};

/**
 * process.nextTick() callbacks will processed after the current operation in
 * the even loop is completed (not in the next cycle).
 * https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick
 */
const nanotask = (cb) => {
  if (typeof process !== "undefined") {
    process.nextTick(cb);
  } else {
    console.log("!! nanotask not available");
  }
};

/**
 * Normal synchronous function on the main thread that has the highest priority
 * of all and does not gets queued.
 */
const synchronous = (cb) => {
  cb();
};

/**
 * Export all of the functions out to the appropriate environment.
 */
const taskUtils = {
  synchronous,
  nanotask,
  microtaskQueueMicrotask,
  microtaskPromise,
  taskMessageChannel,
  taskSetTimeout,
  taskSetImmediate,
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports.taskUtils = taskUtils;
} else {
  window.taskUtils = taskUtils;
}
