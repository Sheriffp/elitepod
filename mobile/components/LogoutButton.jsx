import { View, Text, TouchableOpacity, Alert } from "react-native";
import COLORS from "../constants/colors";
import styles from "../assets/styles/profile.styles";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../store/authStore";

function LogoutButton() {
	const { logout } = useAuthStore();
	function confirmLogout() {
		Alert.alert("Logout", "Are you sure you want to logout?", [
			{ text: "Cancel", style: "cancel" },
			{ text: "Logout", onPress: () => logout(), style: "destructive" }
		]);
	}

	return (
		<TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
			<Ionicons name='log-out-outline' size={20} color={COLORS.white} />
			<Text style={styles.logoutText}>Logout</Text>
		</TouchableOpacity>
	);
}

export default LogoutButton;
