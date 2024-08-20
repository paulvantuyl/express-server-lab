const express = require('express');
const app = express();
const port = 8080;

// Route to handle requests to the root path "/"
app.get('/', (req, res) => {
    return res.send("Hello, world.");
});

// Start the server and listen on the specified port
let server = app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
})