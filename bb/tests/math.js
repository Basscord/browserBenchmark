/**
 * Test Math
 *
 * @package BrowserBenchmark tests
 * @param  {integer} cycles
 * @return {bool}
 */
BrowserBenchmark.tests.math = function(cycles)
{
	'use strict';

	cycles = cycles || 200000;

	var foo;
	var bar = 0;

	while(cycles > 0)
	{
		foo = (932124 / 219801726) * 4567498933;
		foo = Math.random(0, foo);
		foo = Math.random(0, foo / 765887634.2422);
		foo = Math.floor(foo);

		bar += foo;

		cycles --;
	}

	return true;
};

// EOF