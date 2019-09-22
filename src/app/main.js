var bar = Rx.Observable.interval(500).take(5);
var more = Rx.Observable.of(5, 6, 7, 8, 9);

var foo = bar.concat(more).startWith("ready ... go!");

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
