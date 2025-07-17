import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI, {
   /*    useNewUrlParser: true,
      useUnifiedTopology: true, */
    });

    console.log("Mongo connecté");
  } catch (error) {
    console.log("Erreur de connexion MongoDB :", error);
    process.exit(1);
  }
};

export default connectDB;