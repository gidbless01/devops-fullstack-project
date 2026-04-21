const express = require('express');
const app = express();

app.use(express.json());

// Dummy user
const user = {
    username: "admin",
    password: "password123"
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        return res.json({ message: "Login successful" });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
});

app.get('/', (req, res) => {
    res.send("Login API is running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});