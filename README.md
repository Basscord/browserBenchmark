Browser Benchmark
================

(Forked from ThePaavero/browserBenchmark)

*Quickly* determine a browser's general JS preformance at a given time.

Other benchmarks (Sunspider, RoboHornet, etc.) take lots of time to execute.

My test should only take a few milliseconds, and give the web-application a general idea of performance.

Usage example:

```javascript
var tests   = new BrowserBenchmark.app();
var results = tests.init();
if(results.overall > 200){
	// slow browser, don't execute heavy JS
}
```

A future version this benchmark might just return "slow" if the execution time exceeds a certain threshold.