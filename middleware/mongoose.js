import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('MongoDB is connected');
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB Connected');
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
    }
  }
};

export default connectDB;