const reverseString = function(str) {
	const strLen = str.length;
	let arr = [];
	for (let i = 0; i < strLen; i++) { arr[i] = str.charAt(strLen-1-i) }
	return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
