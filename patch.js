/*!
 * react-ace: patch.js
 * Authors  : = <=> (https://github.com/fishbar)
 * Create   : 2016-01-19 01:30:07
 * CopyRight 2016 (c) Fish And Other Contributors
 */

exports.moduleUrl = function (name, component) {
  if (options.$moduleUrls[name])
      return options.$moduleUrls[name];

  var parts = name.split("/");
  component = component || parts[parts.length - 2] || "";
  // PATCH
  // var sep = component == "snippets" ? "/" : "-";
  var sep = '/';
  var base = parts[parts.length - 1];
  if (component == "worker" && sep == "-") {
      var re = new RegExp("^" + component + "[\\-_]|[\\-_]" + component + "$", "g");
      base = base.replace(re, "");
  }

  if ((!base || base == component) && parts.length > 1)
      base = parts[parts.length - 2];
  var path = options[component + "Path"];
  if (path == null) {
      path = options.basePath;
  }
  // PATCH
  // else if (sep == "/") {
  //    component = sep = "";
  // }
  if (path && path.slice(-1) != "/")
      path += "/";
  return path + component + sep + base + this.get("suffix");
};