var bar = new Rx.Observable(function subscribe(observer) {
  var id = setInterval(function() {
    observer.next("hi");
  }, 100);
  return function unsubscribe() {
    clearInterval(id);
  };
});

var subscription = bar.subscribe(
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

setTimeout(function() {
  subscription.unsubscribe();
}, 4000);
