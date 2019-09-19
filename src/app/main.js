var bar = Rx.Observable.create(function(observer) {
  observer.next("foo");
  observer.next("baz");
  setInterval(function() {
    observer.next("bar");
  }, 1000);
});

bar.subscribe(function(val) {
  console.log(val);
});
