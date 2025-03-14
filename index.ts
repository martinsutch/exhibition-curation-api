import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes";
import collectionRoutes from "./src/routes/collectionRoutes";
import artRoutes from "./src/routes/artRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/collections", collectionRoutes);
app.use("/art", artRoutes);

export default app;
