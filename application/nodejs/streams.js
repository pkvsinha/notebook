/**
 * This Module explains the usage of streams module.
 * 
 * Streams represent flow of data. The flow can be categorized as inflow that is when something is put on the
 * stream, and outflow when something is taken out of the stream - outflow. Inflow is represetned by 
 * writable stream and outflow is Readable stream. When a data is sent on to the stream it has to 
 * be either read by a Readable stream instance - for whatever purpose.
 * 
 * Implications - Flow, Error Handling
 * Streams generally use `Buffer` to maintain the data flow
 * Use case: Piping
 */
const stream = require('stream');

