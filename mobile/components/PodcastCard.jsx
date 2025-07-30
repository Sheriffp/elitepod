import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/colors";
import { podcastCardStyles } from "@/assets/styles/home.styles";

export default function PodcastCard({ podcast }) {
	const router = useRouter();

	return (
		<TouchableOpacity
			style={podcastCardStyles.container}
			onPress={() => router.push(`/podcast/${podcast.id}`)}
			activeOpacity={0.8}
		>
			<View style={podcastCardStyles.imageContainer}>
				<Image
					source={{ uri: podcast.image }}
					style={podcastCardStyles.image}
					contentFit='cover'
					transition={300}
				/>
			</View>
			<View style={podcastCardStyles.content}>
				<Text style={podcastCardStyles.title} numberOfLines={2}>
					{podcast.title}
				</Text>
				{podcast.description && (
					<Text
						style={podcastCardStyles.description}
						numberOfLines={2}
					>
						{podcast.description}
					</Text>
				)}
				<View style={podcastCardStyles.footer}>
					<View style={podcastCardStyles.timeContainer}>
						<Ionicons
							name='time-outline'
							size={14}
							color={COLORS.textLight}
						/>
						<Text style={podcastCardStyles.timeText}>
							{Math.round(podcast.audio_length_sec / 60)}
							min
						</Text>
					</View>

					<View style={podcastCardStyles.listenContainer}>
						<Ionicons
							name='play'
							size={14}
							color={COLORS.textLight}
						/>
						<Text style={podcastCardStyles.listenText}>Listen</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}
