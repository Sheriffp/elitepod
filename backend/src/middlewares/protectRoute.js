import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
	try {
		const { token } = req.headers;
		if (!token) {
			return res.status(400).json({
				success: false,
				message: "Not authenticated - no token provided"
			});
		}
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		if (!decodedToken) {
			return res.status(401).json({
				success: false,
				message: "Not authorized - invalid token"
			});
		}

		const user = await userModel
			.findById(decodedToken.userId)
			.select("-password");

		if (!user) {
			return res.status(401).json({
				success: false,
				message: "Not authorized - invalid token"
			});
		}

		req.user = user;
		next();
	} catch (error) {
		console.error("Error in protect route middleware", error);
		res.status(500).json({
			success: false,
			message: "Internal server error"
		});
	}
};

export default protectRoute;
