const leapYears = function(yr) {
	if (!Number.isInteger(yr) || yr < 0) return "ERROR";
	if (yr % 400 == 0) return true;
	else if (yr % 100 == 0) return false;
	else if (yr % 4 == 0) return true;
	return false;
};

// Do not edit below this line
module.exports = leapYears;
