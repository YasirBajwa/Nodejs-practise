const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27018/test';

module.exports = async () => {
    console.log('mongoURI',mongoURI)
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
