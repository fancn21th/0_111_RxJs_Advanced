// Rx.Observable.interval(period);
// var bar = Rx.Observable.interval(300);

// Rx.Observable.timer(startTime as number, period);
// Rx.Observable.timer(startTime as date, period);
// var bar = Rx.Observable.timer(4000, 300);
var date = new Date(new Date().getTime() + 4000);
var bar = Rx.Observable.timer(date, 300);

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
