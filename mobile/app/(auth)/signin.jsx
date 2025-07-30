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

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const { login, token, isCheckingAuth } = useAuthStore();
	const router = useRouter();

	const handleSignin = async () => {
		try {
			setLoading(true);
			const result = await login(email, password);

			if (!result.success) {
				return Alert.alert("Error", result.error);
			}
			Alert.alert("Success!", "Your signin was successful");

			if (isCheckingAuth) return null;
		} catch (error) {
			Alert.alert("Error", "Failed to signin, kindly secureTextEntry");
			console.error("Failed to signin", error);
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
					<Text style={authStyles.title}>Welcome Back</Text>
					<View style={authStyles.card}>
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
							onPress={handleSignin}
							disabled={loading}
							activeOpacity={0.8}
						>
							{loading ? (
								<View style={authStyles.activityText}>
									<ActivityIndicator color='#fff' />
									<Text style={authStyles.buttonText}>
										Signing In...
									</Text>
								</View>
							) : (
								<Text style={authStyles.buttonText}>
									Sign In
								</Text>
							)}
						</TouchableOpacity>
						<TouchableOpacity
							style={authStyles.linkContainer}
							onPress={() => router.push("/(auth)/signup")}
						>
							<Text style={authStyles.linkText}>
								Don&apos;t have an account?{" "}
								<Text style={authStyles.link}>Sign Up</Text>
							</Text>
						</TouchableOpacity>
					</View>

				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};

export default Signin;
