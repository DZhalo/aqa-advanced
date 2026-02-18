const person = {
	firstName: 'Jinny',
	lastName: 'Doe',
	age: 99,
};

person.email = 'j.doe@gmail.com';
delete person.age;

console.log(person);
