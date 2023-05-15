const getTheTitles = function(arr) {
	return arr.map( (e) => {
		if ('title' in e) { return e.title; }
	});
};

// Do not edit below this line
module.exports = getTheTitles;
