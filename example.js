/*!
 * react-ace: example.js
 * Authors  : = <=> (https://github.com/fishbar)
 * Create   : 2016-01-19 01:30:07
 * CopyRight 2016 (c) Fish And Other Contributors
 */
var ace = require('./src/ace.js');

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

ace.config.loadModule('ace/ext/language_tools', function (mod) {
  console.log(mod);
});
