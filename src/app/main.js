var bar = Rx.Observable.create(function(observer) {
  try {
    observer.next("foo");
    observer.next("baz");
    setInterval(function() {
      observer.next("bar");
    }, 1000);
    setInterval(function() {
      // you can NOT throw error here due to context changing
    }, 1000);
    throw new Error("whoops...");
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
  }
);
