# node-zip


node-zip - Zip/Unzip files ported from JSZip

## Installation


```sh
npm install node-zip
```

## Usage

### Complete example, zip multiple files

```js
var fs = require('fs');
var path = require('path');

// The zip library needs to be instantiated:
var zip = new require('node-zip')();

// You can add multiple files by performing subsequent calls to zip.file();
// the first argument is how you want the file to be named inside your zip,
// the second is the actual data:
zip.file('file1.txt', fs.readFileSync(path.join(__dirname, 'file1.txt')));
zip.file('file2.txt', fs.readFileSync(path.join(__dirname, 'file2.txt')));

var data = zip.generate({ base64:false, compression: 'DEFLATE' });

// it's important to use *binary* encode
fs.writeFileSync('test.zip', data, 'binary');
```

------------

You can also load directly:

```js
require('node-zip');
var zip = new JSZip(data, options)
    ...
```

### Zip text into file:

```js
var zip = new require('node-zip')();

zip.file('test.file', 'hello there');
var data = zip.generate({base64:false,compression:'DEFLATE'});
console.log(data); // ugly data
```

### Unzip:

```js
var zip = new require('node-zip')(data, {base64: false, checkCRC32: true});
console.log(zip.files['test.file']); // hello there
```

### Write to a file (IMPORTANT: use *binary* encode, thanks to @Acek)

```js
var fs = require("fs");
zip.file('test.txt', 'hello there');
var data = zip.generate({base64:false,compression:'DEFLATE'});
fs.writeFileSync('test.zip', data, 'binary');
```
## Testing

```sh
npm install -g jasmine-node
jasmine-node test
```

## Manual

node-zip uses JSZip, please refer to their website for further information:
http://stuartk.com/jszip/

## Contributors

> David Duponchel [@dduponchel](https://github.com/dduponchel)

Feel free to send your pull requests and contribute to this project

## License

MIT