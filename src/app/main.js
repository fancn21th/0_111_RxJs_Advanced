var bar = Rx.Observable.of("H", "e", "l", "l", "o");
var baz = Rx.Observable.interval(300).take(5);

/*
  (hello|)                  
  ---0---1---2---3---4|      (bar)
    zip((x,y) => x)
  ---h---e---l---l---o|      (baz)
  */

// c stands for character
// n stands for number
var foo = bar.zip(baz, (x, y) => x);

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
