import { View, Text } from "react-native";

import styles from "../assets/styles/profile.styles";

import { useAuthStore } from "../store/authStore";
import { Image } from "expo-image";
import { formatMemberSince } from "../lib/utils";

function ProfileHeader() {
	const { user } = useAuthStore();

	if (!user) return null;

	return (
	  		<View style={profileStyles.profileHeader}>
			<Image
				source={{ uri: user.profileImage }}
				style={profileStyles.profileImage}
			/>
			<View style={styles.profileInfo}>
				<Text style={profileStyles.fullname}>{user.fullName}</Text>
				<Text style={styles.email}>{user.email}</Text>
				<Text style={styles.memberSince}>
					Joined: {formatMemberSince(user.createdAt)}
				</Text>
			</View>
		</View>
		
		

	);
}

export default ProfileHeader;
