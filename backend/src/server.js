import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import authRoute from "./routes/authRoute.js";

const app = express();

const PORT = process.env.PORT;

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);

app.get("/api/health", (req, res) => {
	res.json({
		success: true,
		message: "Server health is ok!"
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
