// process.stdin.pipe(process.stdout);
// process.stdin.on('readable', ()=>{
//     process.stdout.write(`readable event on readable ${process.stdin.read()} \n`);
// });
// process.stdin.on('data', (data)=>{
//     process.stdout.write(`data event on readable ${data} \n`);
// });
// process.stdin.on('end', (data)=>{
//     process.stdout.write(`end event on readable ${data} \n`);
// });
// process.stdin.on('close', (data)=>{
//     process.stdout.write(`close event on readable ${data} \n`);
// });
// process.stdin.on('error', (data)=>{
//     process.stdout.write(`error event on readable ${data} \n`);
// });

/** 
 * stdin is a Readable interface. By default the data does not flow, and hence if there is nothing
 * in the event loop, the process will exit
*/
function readOnce() {
    process.stdin.resume();
    process.stdin.on('readable', () => {
        let data = process.stdin.read();
        console.log(`Data read once ${data}. Process will exit`);
        process.stdin.pause();
    });

    process.stdin.on('end', () => {
        console.log(`End event on Standad Input`);
    });
}
readOnce();