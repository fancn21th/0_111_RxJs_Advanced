// var bar = Rx.Observable.of("foo", "bar", "baz");
var bar = Rx.Observable.fromArray(["foo", "bar", "baz"]);

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
