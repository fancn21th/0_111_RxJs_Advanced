var bar = Rx.Observable.interval(500).zip(
  Rx.Observable.of("a", "b", "c", "d", 2),
  (x, y) => y
);

// var foo = bar.map(x => x.toUpperCase()).catch(error => Rx.Observable.empty());
var foo = bar.map(x => x.toUpperCase()).catch(error => Rx.Observable.never());

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
