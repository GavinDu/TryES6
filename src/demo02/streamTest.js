const { Writable } = require('stream');

// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback({err:"ddERROR"});
//   }
// });
// try {
//   process.stdin.pipe(outStream);  
// } catch (error) {
//   console.log(error.err);
// }

const { Readable } = require("stream");

const inStream = new Readable();
inStream.push("adsfasdf");
inStream.push("ljjjjojo");
inStream.push(null);
inStream.pipe(process.stdout);