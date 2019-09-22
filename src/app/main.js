var bar = Rx.Observable.interval(1000);

var calculate = function(calculateFn) {
  var source = this;
  var result = Rx.Observable.create(function(observer) {
    source.subscribe(
      function(x) {
        observer.next(calculateFn(x));
      },
      function(err) {
        observer.error(err);
      },
      function() {
        observer.complete();
      }
    );
  });
  return result;
};

Rx.Observable.prototype.calculate = calculate;

var foo = bar.calculate(x => x * 2);

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
