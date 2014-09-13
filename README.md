json-escape
===========

Function escaping string to JSON-safe form.

### Usage ###
```
  var jsonEscape = require('json-escape');
  
  var escapedString = jsonEscape('{ \\ "some "string to "escape" \\,');
  
  console.log(escapedString);
  
  // LOG: '{ \\ \"some \"string to \"escape\" \\,'
  
```

### Performance ###
It's probably the fastest available method, it combines the advantages of native JSON.stringify and Douglas Crockford's implementation. [See the test on JSPerf](http://jsperf.com/json-stringify-vs-json-escape).


Regular expression extracted from [Douglas Crockford's JSON-js parser](https://github.com/douglascrockford/JSON-js/).
