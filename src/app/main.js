var bar = Rx.Observable.of("H", "e", "l", "l", "o");
var baz = Rx.Observable.interval(300).take(5);

/* 
----0----1----2----3----4     (bar)
--0--1--2--3--4               (baz)
  withLatestFrom(bar, baz, (x, y) => x + y

----01--23-4--56--7-----8
*/

// c stands for character
// n stands for number
var foo = bar.withLatestFrom(baz, (c, n) =>
  n % 2 === 0 ? c.toUppercase() : c.toLowerCase()
);

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
