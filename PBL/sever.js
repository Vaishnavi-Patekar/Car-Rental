const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define User schema
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle password change request
app.post('/change-password', async (req, res) => {
    const { username, currentPassword, newPassword, confirmNewPassword } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if current password matches
        if (currentPassword !== user.password) {
            return res.status(400).json({ error: 'Current password is incorrect' });
        }

        // Check if new password matches confirm new password
        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({ error: 'New password and confirm new password do not match' });
        }

        // Update user's password
        user.password = newPassword;
        await user.save();

        // Send success response
        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
