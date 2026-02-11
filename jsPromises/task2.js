function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      if (!res.ok) throw new Error(`Todo request failed: ${res.status}`);
      return res.json();
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
      if (!res.ok) throw new Error(`User request failed: ${res.status}`);
      return res.json();
    });
}


const allPromise = Promise.all([fetchTodo(), fetchUser()]);

allPromise
  .then(([todo, user]) => {
    console.log("Promise.all result:");
    console.log("todo:", todo);
    console.log("user:", user);
  })
  .catch((err) => {
    console.log("Promise.all error:", err.message);
  });


const racePromise = Promise.race([fetchTodo(), fetchUser()]);

racePromise
  .then((firstResult) => {
    console.log("Promise.race result (first resolved):");
    console.log(firstResult);
  })
  .catch((err) => {
    console.log("Promise.race error:", err.message);
  });
