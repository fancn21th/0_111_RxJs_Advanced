function subscribe(observer) {
  observer.next("foo");
  observer.next("bar");
  observer.next("baz");
  observer.complete();
}

var bar = new Rx.Observable(subscribe);

var observer = {
  next: function nextValue(value) {
    console.log(value);
  },
  error: function errorHandler(err) {
    console.log("error", err);
  },
  complete: function completeHandler() {
    console.log("done");
  }
};

var subscription = bar.subscribe(observer);
