var bar = Rx.Observable.interval(300).take(5);

// var foo = bar.delay(2000);
// var foo = bar.delay(new Date(new Date().getTime() + 1000));
var foo = bar.delayWhen(x => Rx.Observable.interval(x * x * 100).take(1));

foo.subscribe(
  function(val) {
    console.log("next", val);
  },
  function(err) {
    console.log("error", err);
  },
  function() {
    console.log("done");
  }
);
