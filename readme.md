## ace2

wraper the origin ace code, let it can be required as an cmd module

## build & test

init project code
```
git clone
npm install .
```

build ace from vx.y.z:
```
./build.sh x.y.z
```

test build result:
```
npm run example
```
then brower open `http://localhost:9999`

when editor is working fine, release the code:
```
make release
```

### usage

```
var ace = require('ace2');

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

```

full api doc is [here](https://ace.c9.io/#nav=api)

### for react user,  [react-ace2]()