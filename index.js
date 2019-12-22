'use strict';
const re = 'X[1-9A-HJ-NP-Za-km-z]{33}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
