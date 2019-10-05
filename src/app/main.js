var bar = Rx.Observable.interval(500).map(() => Math.random());

var foo = bar
  .map(x => {
    if (x < 0.5) {
      return x;
    } else {
      throw new Error("Random Number is too large");
    }
  })
  .catch((err, outputObs) => outputObs);

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
