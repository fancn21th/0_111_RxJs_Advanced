var labelElem = document.getElementById("label");
var bar = Rx.Observable.of("H", "e", "l", "l", "o").zip(
  Rx.Observable.interval(1000).take(5),
  (x, y) => x
);
// var foo = bar.distinct();
var foo = bar.distinctUntilChanged();
foo.subscribe(
  function(val) {
    labelElem.textContent = val;
    console.log("next", val);
  },
  function(err) {
    console.log("error", err);
  },
  function() {
    console.log("done");
  }
);
