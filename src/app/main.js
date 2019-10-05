var bar = Rx.Observable.interval(500).zip(
  Rx.Observable.of("a", "b", "c", "d", "e", 2),
  (x, y) => y
);

// var foo = bar.map(x => x.toUpperCase()).retry(2);
var foo = bar
  .map(x => x.toUpperCase())
  .retryWhen(errorObs => errorObs.delay(1000));

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
