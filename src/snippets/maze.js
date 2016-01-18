/*!
 * react-ace: src/snippets/maze.js
 * Authors  : = <=> (https://github.com/fishbar)
 * Create   : 2016-01-19 01:30:07
 * CopyRight 2016 (c) Fish And Other Contributors
 */
!(function(){var ace = window.___ace___;
ace.define("ace/snippets/maze",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet >\n\
description assignment\n\
scope maze\n\
	-> ${1}= ${2}\n\
\n\
snippet >\n\
description if\n\
scope maze\n\
	-> IF ${2:**} THEN %${3:L} ELSE %${4:R}\n\
";
exports.scope = "maze";

});
})();
