import { Stack, Redirect } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

const AuthLayout = () => {
	const { user, token, checkAuth, isCheckingAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, []);

	if (isCheckingAuth) return;

	const isSignedIn = !!user && !!token;

	if (isSignedIn) {
		return <Redirect href='/' />;
	}

	return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
