// var bar = Rx.Observable.fromPromise(
//   fetch("https://jsonplaceholder.typicode.com/todos")
// );

// fetch api reference at https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

var bar = Rx.Observable.from(
  fetch("https://jsonplaceholder.typicode.com/todos").then(function(result) {
    return result.json();
  })
);

bar.subscribe(
  function nextValue(value) {
    console.log(value);
  },
  function errorHandler(err) {
    console.log("error", err);
  },
  function completeHandler() {
    console.log("done");
  }
);
