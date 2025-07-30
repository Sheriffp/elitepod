import {
	View,
	Text,
	Alert,
	Platform,
	ScrollView,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { authStyles } from "@/assets/styles/auth.styles";
import { COLORS } from "@/constants/colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const Signup = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const { register, isCheckingAuth } = useAuthStore();
	const router = useRouter();

	const handleSignup = async () => {
		try {
			setLoading(true);
			const result = await register(fullName, email, password);

			if (!result.success) {
				return Alert.alert("Error", result.error);
			}
			Alert.alert(
				"Success!",
				"Your signup was successful, sign in to continue"
			);

			if (isCheckingAuth) return null;
			router.push("/(auth)/signin");
		} catch (error) {
			Alert.alert("Error", "Failed to signup, kindly secureTextEntry");
			console.error("Failed to signup", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={authStyles.container}>
			<KeyboardAvoidingView
				style={authStyles.keyboardView}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 32}
			>
				<ScrollView
					contentContainerStyle={authStyles.scrollContent}
					showVerticalScrollIndicator={false}
					keyboardShouldPersistTaps='handled'
				>
					<View style={authStyles.imageContainer}>
						<Image
							source={require("@/assets/images/i.png")}
							style={authStyles.image}
							contentFit='contain'
						/>
					</View>
					<Text style={authStyles.title}>Create Account</Text>
					<View style={authStyles.card}>
						<View style={authStyles.formContainer}>
							<Text style={authStyles.label}>FullName</Text>
							<View style={authStyles.inputContainer}>
								<Ionicons
									name='person-outline'
									size={20}
									color={COLORS.primary}
									style={authStyles.inputIcon}
								/>
								<TextInput
									style={authStyles.textInput}
									placeholder='John Doe'
									placeholderTextColor={COLORS.textLight}
									value={fullName}
									onChangeText={setFullName}
								/>
							</View>
						</View>
						<View style={authStyles.formContainer}>
							<Text style={authStyles.label}>Email</Text>
							<View style={authStyles.inputContainer}>
								<Ionicons
									name='mail-outline'
									size={20}
									color={COLORS.primary}
									style={authStyles.inputIcon}
								/>
								<TextInput
									style={authStyles.textInput}
									placeholder='johndoe@example.com'
									placeholderTextColor={COLORS.textLight}
									value={email}
									onChangeText={setEmail}
									keyboardType='email-address'
									autoCapitalize='none'
								/>
							</View>
						</View>
						<View style={authStyles.formContainer}>
							<Text style={authStyles.label}>Password</Text>
							<View style={authStyles.inputContainer}>
								<Ionicons
									name='lock-closed-outline'
									size={20}
									color={COLORS.primary}
									style={authStyles.inputIcon}
								/>
								<TextInput
									style={authStyles.textInput}
									placeholder='******'
									placeholderTextColor={COLORS.textLight}
									value={password}
									onChangeText={setPassword}
									secureTextEntry={!showPassword}
									autoCapitalize='none'
								/>
								<TouchableOpacity
									style={authStyles.eyeButton}
									onPress={() =>
										setShowPassword(!showPassword)
									}
								>
									<Ionicons
										name={
											showPassword
												? "eye-outline"
												: "eye-off-outline"
										}
										size={20}
										color={COLORS.textLight}
									/>
								</TouchableOpacity>
							</View>
						</View>
						<TouchableOpacity
							style={[
								authStyles.authButton,
								loading && authStyles.buttonDisabled
							]}
							onPress={handleSignup}
							disabled={loading}
							activeOpacity={0.8}
						>
							{loading ? (
								<View style={authStyles.activityText}>
									<ActivityIndicator color='#fff' />
									<Text style={authStyles.buttonText}>
										Signing Up...
									</Text>
								</View>
							) : (
								<Text style={authStyles.buttonText}>
									Sign Up
								</Text>
							)}
						</TouchableOpacity>
						<TouchableOpacity
							style={authStyles.linkContainer}
							onPress={() => router.back("/(auth)/signin")}
						>
							<Text style={authStyles.linkText}>
								Already have an account?{" "}
								<Text style={authStyles.link}>Sign In</Text>
							</Text>
						</TouchableOpacity>
					</View>

				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};

export default Signup;
