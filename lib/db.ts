import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  // connected
  if (connectionState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  // connecting
  if (connectionState === 2) {
    console.log("Connecting to MongoDB");
    return;
  }

  // disconnected, disconnecting
  if (connectionState === 0 || connectionState === 3) {
    try {
      console.log("Connecting to MongoDB");
      await mongoose.connect(MONGODB_URI!, {
        dbName: 'zoomyman',
        bufferCommands: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
      throw new Error(`Error connecting to MongoDB: ${error instanceof Error ? error.message : error}`);
    }
  }
}

export default connect;
