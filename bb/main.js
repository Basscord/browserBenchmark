/**
 * Namespace for BrowserBenchmark
 * @type {Object}
 */
var BrowserBenchmark = {};

/**
 * Placeholder object for our test functions
 * @type {Object}
 */
BrowserBenchmark.tests = {};

/**
 * BrowserBenchmark main object
 *
 * Usage example:
 * var tests   = new BrowserBenchmark.app(['math']);
 * var results = tests.init();
 * console.log(results);
 *
 * @param  {array} tests i.e. ['math', 'something', 'somethingElse']
 * @return {object}      Result object, i.e. "math: 318"
 */
BrowserBenchmark.app = function(tests) {

	var results = {};

	tests = tests || ['math', 'dom'];

	/**
	 * Initiate
	 * @return {object} Result object
	 */
	this.init = function()
	{
		var tests_started = new Date().getTime();
		var my_results    = run();
		var lag           = new Date().getTime() - tests_started;

		my_results.overall = lag;

		return my_results;
	};

	/**
	 * Run tests
	 * @return {object} Result object
	 */
	var run = function()
	{
		var i;

		for(i in tests)
		{
			results[tests[i]] = runTest(tests[i]);
		}

		return results;
	};

	/**
	 * Run single test
	 * @param  {string} name i.e. 'math'
	 * @return {integer} Milliseconds it took to finish the test
	 */
	var runTest = function(name)
	{
		if(BrowserBenchmark.tests[name] === undefined)
		{
			results[name] = 'Unknown test';
			return false;
		}

		var start  = new Date().getTime();
		var result = BrowserBenchmark.tests[name]();
		var stop   = new Date().getTime();
		var lag    = stop - start;

		return lag;
	};

};

// EOF