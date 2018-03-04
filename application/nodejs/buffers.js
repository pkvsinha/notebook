/**
 * This module explains usage of Buffers in Node.js
 * 
 * Buffers are used to represent and manipulate binary data, although it can be used to handle
 * any kind of byte data. They are generally used as a sequence of encoded characters
 * 
 * Equivalent representation is TypedArray's from ES6.
 * Use cases:
 * 
 * 1. Allocate a piece of memory outside the heap to contian data and possibly to manage flow.
 */
const buffer = Buffer.from("Thi is a buffer");
console.log( buffer );
/**
 * '
 */
console.log( buffer.toString('base64') );

/**
 * Iteration
 * .values(), .keys(), .entries()
 */
console.log("Iterating Over Buffer");
for(const e of buffer ) {
    console.log(e);
}

const unsafe = Buffer.allocUnsafe(200);
console.log( unsafe.toString('ascii') );