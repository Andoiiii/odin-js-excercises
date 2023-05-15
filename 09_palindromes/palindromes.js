const palindromes = function (str) {
	let depunc = [];
	for (let i = 0; i < str.length; i++) {
		let charcheck = String(str[i]);
		if (('a' <= charcheck && charcheck <= 'z' ) || ('A' <= charcheck && charcheck <= 'Z')) {
			depunc.push(charcheck.toLowerCase());
		}
	
	}
	let rev = depunc.reverse().join("");
	return rev === depunc.join("");
};

// Do not edit below this line
module.exports = palindromes;
