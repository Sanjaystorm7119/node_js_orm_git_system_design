const { Buffer } = require("buffer");

const buff = Buffer.from("hello");
console.log(buff);
console.log(buff.toString());

const buff1 = Buffer.alloc(10);
buff1.write("hello1");
console.log(buff1.toString("utf-8", 0, 5));

//buffers memomry can be manipulated like arrays
buff1[0] = 0x48;
console.log(buff1.toString("utf-8", 0, 5));

const merged = Buffer.concat([buff, buff1]);
console.log(merged);
console.log(merged.toString());
console.log(merged.length);
