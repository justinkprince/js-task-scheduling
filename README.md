# Task scheduling demo
A simple demonstration of JavaScript task queue scheduling in both the browser and NodeJS. The focus is to show how callbacks can be added to specific task queues and in which order/priority those tasks will be run.

## Installation
To run in the browser, run `yarn install`. Nothing needs installed for running just in NodeJS.

## Usage
To run in the browser, run `yarn start`. A browser window should open with the in-browser demo running. If not, navigate your browser to http://localhost:8080/.

To run in NodeJS, run `yarn run node` and see the results in the terminal. Compare the results to the contents of `./src/node-test.js` where the tests were run.

## Queue priority
Tasks queues are acted upon in the following order, highest priority at the top:
- Synchronous function calls running on the main thread are of first priority
- Nanotasks (NodeJS only) using `process.nextTick()`
- [Microtasks](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) using `queueMicrotask()` (or Promises if `queueMicrotask()` is unavailable).
- Tasks set using [MessageChannel](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel) (browser only)
- Tasks set using `setTimeout()`
- Tasks set using `setImmediate()` (NodeJS only)
