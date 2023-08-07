const fs = require('fs');
const { setTimeout } = require('timers/promises');
const TransformStream = require('stream').Transform;
// we are going to read the data but not the whole data at once.
const readstream = fs.createReadStream(__dirname + '/run.txt');
const filewritestream = fs.createWriteStream(__dirname + '/write.txt');
const transFormedStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000);
    }
});
// output stream
const writestream = process.stdout;
// readstream.pipe(transFormedStream).pipe(writestream);
const outputStream = readstream.pipe(transFormedStream);
outputStream.pipe(writestream);
outputStream.pipe(filewritestream);