var bar = Rx.Observable.interval(300).take(14);

var foo = bar.filter(x => x % 2 === 0);

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
