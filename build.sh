#!/bin/sh
version=$1
if [ -z $version ]; then
  echo 'version need, like `1.2.3`'
  exit 1
fi
mkdir -p tmp
if [ ! -f ./tmp/ace.$version.zip ]; then
  curl -L https://github.com/ajaxorg/ace-builds/archive/v$version.zip -o ./tmp/ace.$version.zip
fi
rm -rf ./tmp/ace-builds-$version
rm -rf ./tmp/ace-src
unzip ./tmp/ace.$version.zip -d ./tmp

mv ./tmp/ace-builds-$version/src-noconflict ./tmp/ace-src

# rename file
mkdir ./tmp/ace-src/mode ./tmp/ace-src/ext ./tmp/ace-src/theme ./tmp/ace-src/worker ./tmp/ace-src/keybinding
cd ./tmp/ace-src/

find . -type f ! -path './ace.js' ! -path './worker-*' | xargs -I {} gsed -i '1 i !(function(){var ace = window.___ace___;' {}
find . -type f ! -path './ace.js' ! -path './worker-*' | xargs -I {} gsed -i '$ a })();' {}
#rename 's/-/\//' *.js
# inject head
#find ./ext ./mode ./theme ./worker ./snippets ./keybinding -type f | xargs -I {} gsed -i '1 i !(function(){var ace = window.___ace___;' {}

# inject foot
#find ./ext ./mode ./theme ./worker ./snippets ./keybinding -type f | xargs -I {} gsed -i '$ a })();' {}

# patch ace.js
#gsed -i '/^exports\.moduleUrl \=/ i _-_-PATCH_-_-' ./ace.js
#gsed -i '/^exports\.moduleUrl \=/, /^};$/d;' ./ace.js
#gsed -i '/^_\-_\-PATCH_\-_\-/ r ../../patch.js' ./ace.js
#gsed -i '/^_\-_\-PATCH_\-_\-/ s/_\-_\-PATCH_\-_\-//' ./ace.js
echo "window.___ace___ = ace; module.exports = ace;" >> ./ace.js

cd ../../

rm -rf src
cp -r tmp/ace-src ./src

echo "success"