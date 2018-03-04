/**
 * This Module explains the usage of streams module.
 * 
 * Streams represent pipeline for the flow of data that has a source and a sink. 
 * Once the pipeline is ready, the data will start flowing making hops represented
 * by the interfaces. When a data is sent on to the stream it has to 
 * be either read by a Readable stream instance - for whatever purpose.
 * 
 * Implications - Flow, Error Handling
 * Streams generally use `Buffer` to maintain the data flow
 * Use case: Piping
 * 
 * 1. Readable
 * 2. Writable 
 * 3. Duplex
 * 4. Transform
 */
const stream = require('stream');

/**
 * Readable. They all begin with paused mode. which can be converted into flowing mode
 */
process.stdin
