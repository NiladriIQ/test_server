import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.st1a2qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully !!');
    } catch(error) {
        console.log('Error while connecting with database : ', error.message);
    }

};

export default Connection;