/**
 * Test DOM
 *
 * @package BrowserBenchmark tests
 * @param  {integer} cycles
 * @return {bool}
 */
BrowserBenchmark.tests.dom = function(cycles)
{
	'use strict';

	cycles = cycles || 1000;

	while(cycles > 0)
	{
		var element = document.createElement('div');

		element.innerHTML = 'Foo';

		document.body.appendChild(element);
		document.body.removeChild(element);

		cycles --;
	}

	return true;
};

// EOF