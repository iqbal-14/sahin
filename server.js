const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Default to index.html
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    // Get the file extension
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // Read the file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code === 'ENOENT') {
                fs.readFile('./index.html', (error, content) => {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end('Sorry, there was an error: '+error.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
    console.log('Press Ctrl+C to stop the server');
});
