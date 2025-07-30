import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = userId => {
	return jwt.sign({ userId }, process.env.JWT_SECRET);
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
		if (!email.includes("@")) {
			return res
				.status(400)
				.json({ success: false, message: "Enter a valid email" });
		}
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(400).json({
				success: false,
				message: "User not found!"
			});
		}
		const isPasswordCorrect = await user.comparePassword(password);
		if (!isPasswordCorrect) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid credentials" });
		}
		const token = createToken(user._id);

		res.status(200).json({
			success: true,
			message: "Login successful!",
			user: {
				id: user._id,
				email: user.email,
				fullName: user.fullName,
				profileImage: user.profileImage
			},
			token
		});
	} catch (error) {
		console.error("Error logging user in", error);
		res.status(500).json({
			success: false,
			message: "Internal server error"
		});
	}
};
export const register = async (req, res) => {
	try {
		const { fullName, email, password } = req.body;

		if (!fullName || !email || !password) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}

		if (fullName.length < 3) {
			return res
				.status(400)
				.json({ success: false, message: "Enter a valid name" });
		}

		if (!email.includes("@")) {
			return res
				.status(400)
				.json({ success: false, message: "Enter a valid email" });
		}

		if (password.length < 6) {
			return res.status(400).json({
				success: false,
				message: "Password must be at least 6 characters long"
			});
		}

		const userExist = await userModel.findOne({ email });
		if (userExist) {
			return res
				.status(400)
				.json({ success: false, message: "User already exist!" });
		}

		const idx = Math.floor(Math.random() * 100) + 1;

		const profileImage =
			`https://avatar.iran.liara.run/public/${idx}` || "";

		const newUser = await userModel.create({ ...req.body, profileImage });

		return res.status(201).json({
			success: true,
			message: "Signup successful, login to continue",
			newUser: {
				id: newUser._id,
				email: newUser.email,
				fullName: newUser.fullName,
				profileImage: newUser.profileImage
			}
		});
	} catch (error) {
		console.error("Error registering user", error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error"
		});
	}
};
