/*!
 * react-ace: src/snippets/lua.js
 * Authors  : = <=> (https://github.com/fishbar)
 * Create   : 2016-01-19 01:30:07
 * CopyRight 2016 (c) Fish And Other Contributors
 */
!(function(){var ace = window.___ace___;
ace.define("ace/snippets/lua",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet #!\n\
	#!/usr/bin/env lua\n\
	$1\n\
snippet local\n\
	local ${1:x} = ${2:1}\n\
snippet fun\n\
	function ${1:fname}(${2:...})\n\
		${3:-- body}\n\
	end\n\
snippet for\n\
	for ${1:i}=${2:1},${3:10} do\n\
		${4:print(i)}\n\
	end\n\
snippet forp\n\
	for ${1:i},${2:v} in pairs(${3:table_name}) do\n\
	   ${4:-- body}\n\
	end\n\
snippet fori\n\
	for ${1:i},${2:v} in ipairs(${3:table_name}) do\n\
	   ${4:-- body}\n\
	end\n\
";
exports.scope = "lua";

});
})();