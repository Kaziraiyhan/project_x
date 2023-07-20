let myPromise = new Promise((resolve, reject) => {
  console.log("p is pandding");
  setTimeout(() => {
    console.log("I am full rejected");
    reject(new Error("i am a err"));
  }, 3000);
});

myPromise.then((value) => {
  console.log(value);
});

