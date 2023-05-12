const sumAll = function(x,y) {
	
	if (Number.isInteger(x) || Number.isInteger(y) || x < 0 || y < 0) return "ERROR";

	let val = 0;
	const minVal = Math.min(x,y);
	const maxVal = Math.max(x,y);
	for (let i = minVal; i <= maxVal; i++) { val += i }
	return val;
};

// Do not edit below this line
module.exports = sumAll;
