/*!
 * react-ace: src/snippets/gobstones.js
 * Authors  : = <=> (https://github.com/fishbar)
 * Create   : 2016-01-19 01:30:07
 * CopyRight 2016 (c) Fish And Other Contributors
 */
!(function(){var ace = window.___ace___;
ace.define("ace/snippets/gobstones",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# Procedure\n\
snippet proc\n\
	procedure ${1?:name}(${2:argument}) {\n\
		${3:// body...}\n\
	}\n\
\n\
# Function\n\
snippet fun\n\
	function ${1?:name}(${2:argument}) {\n\
		return ${3:// body...}\n\
	}\n\
\n\
# Repeat\n\
snippet rep\n\
	repeat ${1?:times} {\n\
		${2:// body...}\n\
	}\n\
\n\
# For\n\
snippet for\n\
	foreach ${1?:e} in ${2?:list} {\n\
		${3:// body...}	\n\
	}\n\
\n\
# If\n\
snippet if\n\
	if (${1?:condition}) {\n\
		${3:// body...}	\n\
	}\n\
\n\
# While\n\
  while (${1?:condition}) {\n\
    ${2:// body...}	\n\
  }\n\
";
exports.scope = "gobstones";

});
})();
