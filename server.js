const express = require('express'),
    app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/order', (req, res) => {
    res.sendFile(__dirname + '/order.html');
});

app.get('/about-us', (req, res) => {
    res.sendFile(__dirname + '/about-us.html');
});

app.get('/mission-and-vision', (req, res) => {
    res.sendFile(__dirname + '/mission-and-vision.html');
});

app.get('/contact-us', (req, res) => {
    res.sendFile(__dirname + '/contact-us.html');
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})