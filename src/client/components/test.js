
var promise1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('foo');
  }, 3000);
});

promise1.then(function(value) {
  console.log("promise finished");
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]
