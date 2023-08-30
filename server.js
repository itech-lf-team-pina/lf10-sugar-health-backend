const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
