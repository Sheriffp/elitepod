import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { height } = Dimensions.get("window");

export const authStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background
	},
	keyboardView: {
		flex: 1
	},
	scrollContent: {
		flexGrow: 1,
		paddingHorizontal: 24,
		paddingTop: 20
	},
	imageContainer: {
		height: height * 0.3,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: -5
	},
	image: {
		width: 320,
		height: 320
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: COLORS.text,
		textAlign: "center",
		marginBottom: 40,
		marginTop: -10
	},
	subtitle: {
		fontSize: 16,
		color: COLORS.textLight,
		textAlign: "center",
		marginBottom: 30,
		marginTop: -30
	},
	card: {
		backgroundColor: COLORS.background,
		borderRadius: 16,
		padding: 24,
		shadowColor: COLORS.shadow,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
		borderWidth: 2,
		borderColor: COLORS.border,
		marginTop: -24,
		marginBottom: 60
	},
	formContainer: {
		flex: 1
	},
	label: {
		fontSize: 14,
		marginBottom: 8,
		color: COLORS.primary,
		fontWeight: "600"
	},
	inputContainer: {
		flexDirection: "row",
		marginBottom: 15,
		position: "relative",
		alignItems: "center",
		backgroundColor: COLORS.card,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: COLORS.border
	},
	inputIcon: {
		marginLeft: 10,
		position: " absolute"
	},
	textInput: {
		flex: 1,
		fontSize: 16,
		color: COLORS.text,
		paddingVertical: 16,
		paddingLeft: 10,
		borderRadius: 12,
		alignItems: "center"
	},
	eyeButton: {
		position: "absolute",
		right: 16,
		padding: 4
	},
	authButton: {
		backgroundColor: COLORS.primary,
		paddingVertical: 18,
		borderRadius: 12,
		marginTop: 10,
		marginBottom: 20
	},
	buttonDisabled: {
		opacity: 0.7
	},
	activityText: {
		flexDirection: "row",
		alignSelf: "center"
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
		color: COLORS.white,
		textAlign: "center",
		paddingHorizontal: 4
	},
	linkContainer: {
		alignItems: "center",
		paddingBottom: 5
	},
	linkText: {
		fontSize: 16,
		color: COLORS.textLight
	},
	link: {
		color: COLORS.primary,
		fontWeight: "600"
	}
});
