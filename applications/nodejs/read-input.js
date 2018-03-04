
console.log("Initially stdin is in paused mode : "+ process.stdin.isPaused());
// process.stdin.pipe(process.stdout);
process.stdin.on('readable', ()=>{
    process.stdout.write(`readable event on readable ${process.stdin.read()} \n`);
});
process.stdin.on('data', (data)=>{
    process.stdout.write(`data event on readable ${data} \n`);
});
process.stdin.on('end', (data)=>{
    process.stdout.write(`end event on readable ${data} \n`);
});
process.stdin.on('close', (data)=>{
    process.stdout.write(`close event on readable ${data} \n`);
});
process.stdin.on('error', (data)=>{
    process.stdout.write(`error event on readable ${data} \n`);
});
console.log("After Calling .read() from Readable method unpaused : "+ process.stdin.isPaused());