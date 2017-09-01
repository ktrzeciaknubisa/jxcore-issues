//import { Writable } from 'stream';
//class CustomStream extends Writable {
//  constructor() {
//    super();
//  }
//  _write(chunk, e, cb) {
//    console.log('chunk:', chunk.toString()); // test
//    cb();
//  }
//}
//
//var stream = new CustomStream();
//stream.write('test');
//stream.end();

var nums = [4, 5, 6].map(num => num + 1);
console.log(nums); // [5, 6, 7]