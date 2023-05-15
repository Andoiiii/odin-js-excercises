function getAge(person) {
	if ("yearOfDeath" in person) { return person.yearOfDeath - person.yearOfBirth; }
	else return new Date().getFullYear() - person.yearOfBirth;
}


const findTheOldest = function(arr) {
	return arr.reduce( (acc, x) => {
		console.log(x,acc);
		if ( getAge(x) > getAge(acc) ) { return x; }
		else return acc;
	}, { name: "Null", yearOfBirth: 0, yearOfDeath: -1, })
};

// Do not edit below this line
module.exports = findTheOldest;
