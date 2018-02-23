import test from 'ava';
import m from './';

const fixtures = [
		'XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh',
		'Xm9TJiJ7nWjme8K7iEPUGsC5JjYGzPk2QU',
		'Xe4q4hA2bXWuZHHDRPb3R72cpauDYEk8CP',
		'XvwKzdsn46psqy6WhZ2wfhRPyRkD6GL2BG',
		'XcKvX5SeAwPSfyiKBw6QKt6EnA9FtWvk1r'
];

const fixturesNot = [
		'0x6f46cf5569aefa1acc1009290c8e043747172d89',
		'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
		'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
		'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
		'nikolaskam{at}gmail{dot}com'
];

test('Exact DASH addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact DASH addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
	
	t.is(m().exec('dogecoin:XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh')[0], 'XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh');
});

test('Non-DASH addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});