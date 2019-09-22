var bar = Rx.Observable.of(1, 2, 3);

var multiplyByTen = function() {
  var source = this;
  var result = Rx.Observable.create(function(observer) {
    source.subscribe(
      function(x) {
        observer.next(x * 10);
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

var multiplyBy = function(multiplier) {
  var source = this;
  var result = Rx.Observable.create(function(observer) {
    source.subscribe(
      function(x) {
        observer.next(x * multiplier);
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

Rx.Observable.prototype.multiplyByTen = multiplyByTen;
Rx.Observable.prototype.multiplyBy = multiplyBy;

var foo = bar.multiplyByTen();
var baz = bar.multiplyBy(100);

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

baz.subscribe(
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
