const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// POST endpoint to handle form submission
app.post("/data", (req, res) => {
    const { name, email, phone } = req.body;
    console.log(`Received form data: Name - ${name}, Email - ${email}, Phone - ${phone}`);
    res.send('Form submitted successfully!');
});

// Route all other requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});