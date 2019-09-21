var bar = Rx.Observable.create(function(observer) {
  try {
    observer.next("foo");
    observer.next("baz");
    setInterval(function() {
      observer.next("bar");
      observer.complete();
    }, 3000);
  } catch (error) {
    observer.error(error);
  }
});

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
