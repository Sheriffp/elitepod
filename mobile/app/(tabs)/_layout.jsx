import { Redirect, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

const TabLayout = () => {
	const { user, token, checkAuth, isCheckingAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, []);

	if (isCheckingAuth) {
		return null;
	}

	const isSignedIn = !!user && !!token;

	if (!isSignedIn) {
		return <Redirect href='/(auth)/signin' />;
	}

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.textLight,
				tabBarStyle: {
					backgroundColor: COLORS.white,
					paddingBottom: 8,
					paddingTop: 8,
					height: 70
				},
				tabBarLabelStyle: { fontSize: 12, fontWeight: "600" }
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='home' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='categories'
				options={{
					title: "Categories",
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name='category'
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profile",
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name='person'
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: "Settings",
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name='settings'
							size={size}
							color={color}
						/>
					)
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
