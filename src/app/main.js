var bar = Rx.Observable.interval(500).zip(
  Rx.Observable.of("a", "b", "c", "d", "e"),
  (x, y) => y
);

var foo = bar.map(x => x.toUpperCase()).repeat(3);

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
