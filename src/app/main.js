var bar = Rx.Observable.interval(300);

// var foo = bar.take(10);
var foo = bar.first();
var foo = bar.skip(10).take(10);

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
