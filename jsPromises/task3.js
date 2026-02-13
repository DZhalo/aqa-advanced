async function fetchTodo() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	if (!res.ok) throw new Error(`Todo request failed: ${res.status}`);
	return res.json();
}

async function fetchUser() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
	if (!res.ok) throw new Error(`User request failed: ${res.status}`);
	return res.json();
}

async function run() {
	try {
		const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
		console.log('Promise.all (async/await):');
		console.log('todo:', todo);
		console.log('user:', user);

		const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
		console.log('Promise.race (async/await):');
		console.log(firstResult);
	} catch (err) {
		console.log('Error:', err.message);
	}
}

run();
