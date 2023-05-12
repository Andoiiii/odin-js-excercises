const removeFromArray = function(arr, ...vals) {
	let out = [];
	arr.forEach( (elem) => 
		{ if (!vals.includes(elem)) { out.push(elem) }} );
	return out;
};

// Do not edit below this line
module.exports = removeFromArray;
