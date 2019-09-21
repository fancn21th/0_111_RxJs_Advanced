// var addEventHandler = function(handler) {
//   document.addEventListener("click", handler);
// };

// var removeEventHandler = function(handler) {
//   document.addEventListener("click", handler);
// };

// var bar = Rx.Observable.fromEventPattern(addEventHandler, removeEventHandler);

var bar = Rx.Observable.fromEvent(document, "click");

bar.subscribe(
  function nextValue(value) {
    console.log(value);
  },
  function errorHandler(err) {
    console.log("error", err);
  },
  function completeHandler() {
    console.log("done");
  }
);
