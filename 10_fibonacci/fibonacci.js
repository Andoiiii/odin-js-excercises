const fibonacci = function(n) {
	if (n <= 0) return "ERROR";
	else if (n <= 2) return 1;
	n = Number(n);
	let prev = 1;
	let cur = 1;
	for (let i = 2; i < n ; i++) {
		let temp = prev;
		prev = cur;
		cur = temp + cur;
	}
	return cur;
};

let arr = [ 1,2,3,4,5,6,7,8,9,10];
console.log(fibonacci("25"));
console.log(arr.map( e => fibonacci(e)));

// Do not edit below this line
module.exports = fibonacci;
