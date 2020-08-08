'use strict';
const re = 'X[1-9A-HJ-NP-Za-km-z]{33}';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
