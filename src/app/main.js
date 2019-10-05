var bar = Rx.Observable.of("H", "e", "l", "l", "o");
var baz = Rx.Observable.interval(300).take(5);

// var foo = bar.zip(baz, (x, y) => x).bufferCount(2);

/*
--(Hello)----------------------------> (bar)
--0--1--2--3--4--------------->        (baz)
  bar.zip(baz)
--H--e--l--l--o-------------->
  bufferTime(200)
----------------------------->
*/

var foo = bar.zip(baz, (x, y) => x).bufferTime(200);

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
