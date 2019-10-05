var fieldElem = document.getElementById("field");
var labelElem = document.getElementById("label");

var inputText = Rx.Observable.fromEvent(fieldElem, "input")
  .map(evt => evt.target.value)
  .debounceTime(1000);

inputText.subscribe(
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
