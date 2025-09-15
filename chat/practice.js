function emitNumbers() {
  let count = 1;
  const interval = setInterval(() => {
    console.log(count++);
  }, 2000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped after 5 seconds");
  }, 5000);
}

emitNumbers();

function fetchWithTimeout(url) {
  let didTimeout = false;

  setTimeout(() => {
    didTimeout = true;
    console.log("request aborted");
  }, 10);

  fetch(url)
    .then(res => {
      if (!didTimeout) {
        return res.json();
      }
    })
    .then(data => {
      if (!didTimeout) {
        console.log("Data:", data);
      }
    })
    .catch(err => {
      if (!didTimeout) {
        console.error("Fetch error:", err);
      }
    });
}
fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1");