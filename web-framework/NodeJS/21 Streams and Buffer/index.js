const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {

     const rstream = fs.createReadStream('user.json');      // Readable Stream to read the file
     /*
     rstream.on('data', (chunkData) => {               // chunkData is a buffer data  // 1st time chunkData = 64kb
          console.log(chunkData);
          res.end(chunkData);                // 2nd time chunkData = 64kb  
     });

     // If data not available then it will be called
     rstream.on('error', (err) => {
          console.log(err);
          res.end("file not found");
     });
     */

     rstream.pipe(res);   // It is the shorted way to write the above code

     // Pipe is a method which is used to connect the readable stream to the writable stream. it is a method of readable stream.
});

server.listen(8000, '127.0.0.1', () => {
     console.log('Listening to requests on port 8000');
     console.log('http://localhost:8000/');
});