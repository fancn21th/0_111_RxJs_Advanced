var bar = Rx.Observable.of("H", "e", "l", "l", "o");
var baz = Rx.Observable.interval(300).take(5);

/*
(hello|)                          (foo)
-----0-----1-----2-----3-----4|   (bar)
       zip((x,y) => x)
-----h-----e-----l-----l-----o|
  scan((acc, x) => acc+x, '')
-----h-----(he)--(hel)-(hell)(hello|)
*/

// c stands for character
// n stands for number
var foo = bar.zip(baz, (x, y) => x).scan((acc, val) => acc + val, "");

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
