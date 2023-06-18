const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost:27017/test';

module.exports = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};
