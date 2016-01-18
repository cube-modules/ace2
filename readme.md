## bace


```
var ace = require('bace');

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

ace.config.loadModule('ace/ext/language_tools', function (mod) {
  console.log(mod);
});
```