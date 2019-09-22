var bar = Rx.Observable.interval(500).take(5);
var baz = Rx.Observable.interval(300).take(5);

/* 
----0----1----2----3----4     (bar)
--0--1--2--3--4               (baz)
  combineLatest(bar, baz, (x, y) => x + y

--0-01--21-3-24----3----4
*/

var foo = Rx.Observable.merge(bar, baz);

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
