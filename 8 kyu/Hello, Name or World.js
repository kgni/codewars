// March 24, 2022

/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

function hello(name = 'World') {
	if (name === '') name = 'World';
	name = name[0].toUpperCase() + name.slice(1).toLowerCase();
	return `Hello, ${name}!`;
}

// With ternary operator and template literal string
function hello(s) {
	return `Hello, ${
		s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : 'World'
	}!`;
}
