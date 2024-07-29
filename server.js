const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Load initial user info from JSON files
let users = JSON.parse(fs.readFileSync('data/users.json', 'utf-8'));
let userInfo = JSON.parse(fs.readFileSync('data/userinfo.json', 'utf-8'));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ token: 'dummy-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get user data endpoint
app.get('/user', (req, res) => {
  res.status(200).json({
    profile: {
      name: 'John Doe',
      title: 'Software Engineer',
      location: 'New York',
      workplace: 'Tech Company',
      education: 'Computer Science',
      profilePicture: 'profile.jpg',
    },
    experience: [],
    skills: [],
    education: [],
    awards: [],
    languages: [],
  }); 
});

// Update user data endpoint
app.put('/user', (req, res) => {
  userInfo.profile = { ...userInfo.profile, ...req.body };
  fs.writeFileSync('data/userinfo.json', JSON.stringify(userInfo, null, 2));
  res.status(200).json(userInfo.profile); // Return updated profile
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
