const taskSetTimeout = (cb) => {
  setTimeout(cb, 0);
};

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

const taskSetImmediate = (cb) => {
  if (typeof setImmediate !== "undefined") {
    setImmediate(cb);
  } else {
    console.log("!! setImmediate not available");
  }
};

const microtask = (cb) => {
  if (typeof queueMicrotask !== "undefined") {
    queueMicrotask(cb);
  } else {
    Promise.resolve().then(() => cb());
  }
};

const nanotask = (cb) => {
  if (typeof process !== "undefined") {
    process.nextTick(cb);
  } else {
    console.log("!! nanotask not available");
  }
};

const synchronous = (cb) => {
  cb();
};

if (typeof window === "undefined") {
  module.exports.taskUtils = {
    synchronous,
    nanotask,
    microtask,
    taskMessageChannel,
    taskSetTimeout,
    taskSetImmediate,
  };
}
