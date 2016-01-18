/*!
 * react-ace: src/snippets/snippets.js
 * Authors  : = <=> (https://github.com/fishbar)
 * Create   : 2016-01-19 01:30:07
 * CopyRight 2016 (c) Fish And Other Contributors
 */
!(function(){var ace = window.___ace___;
ace.define("ace/snippets/snippets",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# snippets for making snippets :)\n\
snippet snip\n\
	snippet ${1:trigger}\n\
		${2}\n\
snippet msnip\n\
	snippet ${1:trigger} ${2:description}\n\
		${3}\n\
snippet v\n\
	{VISUAL}\n\
";
exports.scope = "snippets";

});
})();
