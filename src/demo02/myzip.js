const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');
const crypto = require('crypto');

const transform = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  }
})
fs.createReadStream(file)
  .pipe(zlib.createGzip())
  //.on('data', () => process.stdout.write('.'))
  .pipe(crypto.createCipher('aes192', '1234'))
  .pipe(transform)
  .pipe(fs.createWriteStream(file + '.zz'))
  .on('finish', () => process.stdout.write('\nDone'));