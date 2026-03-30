import mongoose from "mongoose";
const connectDb = async () => {
    const url = process.env.MONGO_URL;
    if (!url) {
        throw new Error("MONGO_URL is not defined");
    }
    try {
        await mongoose.connect(url, {
            dbName: "Chatappmicroserviceapp"
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Failed to connect to MongoDB", error);
        process.exit(1);
    }
};
export default connectDb;
//# sourceMappingURL=db.js.map