var bar = Rx.Observable.interval(1000).take(4);

var foo = bar
  .do(x => console.log("before", x))
  .map(x => x * 2)
  .do(x => console.log("after", x));

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
