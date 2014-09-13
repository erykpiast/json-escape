json-escape
===========

Function escaping string to JSON-safe form.

*** Performance ***
It's probably the fastest available method, it merges prons of native JSON.stringify and Douglas Crockford's implementation. [See the test on JSPerf](http://jsperf.com/json-stringify-vs-json-escape).


Regular expression extracted from [Douglas Crockford's JSON-js parser](https://github.com/douglascrockford/JSON-js/).
