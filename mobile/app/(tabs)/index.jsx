import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	RefreshControl,
	FlatList
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
	getRandomPodcast,
	getPodcastByGenre,
	getPodcastGenres
} from "@/services/listenNotesApi";
import { homeStyles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { Image } from "expo-image";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useAuthStore } from "@/store/authStore";
import Featured from "@/components/Featured";
import Loader from "@/components/Loader";
import GenreFilter from "@/components/GenreFilter";
import PodcastCard from "@/components/PodcastCard";

const HomeScreen = () => {
	const router = useRouter();
	const { user } = useAuthStore();
	const [podcasts, setPodcasts] = useState([]);
	const [featuredPodcast, setFeaturedPocast] = useState(null);
	const [genres, setGenres] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState(null);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [query, setQuery] = useState("");

	const loadData = async () => {
		try {
			setLoading(true);
			const [podcastGenres, apiPodcasts, randomPodcast] =
				await Promise.all([
					getPodcastGenres(),
					getPodcastByGenre(null),
					getRandomPodcast()
				]);

			const transformedGenres = podcastGenres.map((genre, index) => ({
				id: genre.id,
				name: genre.name
			}));

			setGenres(transformedGenres);
			setPodcasts(apiPodcasts);
			setFeaturedPocast(randomPodcast);
		} catch (error) {
			console.error("Error loading data", error);
		} finally {
			setLoading(false);
		}
	};

	const loadGenreData = async genreId => {
		const podcastByGenre = await getPodcastByGenre(genreId);
		setPodcasts(podcastByGenre);
	};

	const handleGenreSelect = async genreId => {
		setSelectedGenre(genreId);
		await loadGenreData(genreId);
	};

	const onRefresh = async () => {
		setRefreshing(true);
		loadData();
		setRefreshing(false);
	};

	useEffect(() => {
		loadData();
	}, []);

	if (loading && !refreshing) return <Loader message='Loading podcasts...' />;

	return (
		<View style={homeStyles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						tintColor={COLORS.primary}
					/>
				}
				contentContainerStyle={homeStyles.scrollContent}
			>
				{featuredPodcast && (
					<Featured featuredPodcast={featuredPodcast} />
				)}
				{genres.length > 0 && (
					<GenreFilter
						genres={genres}
						selectedGenre={selectedGenre}
						onSelectGenre={handleGenreSelect}
					/>
				)}
				<View style={homeStyles.podcastsSection}>
					<View style={homeStyles.sectionHeader}>
						<Text style={homeStyles.sectionTitle}>
							{genres.find(g => g.id === selectedGenre)?.name ||
								"All"}
						</Text>
					</View>
					<FlatList
						data={podcasts}
						renderItem={({ item }) => (
							<PodcastCard podcast={item} />
						)}
						horizontal
						showsHorizontalScrollIndicator={false}
						scrollEnabled={true}
						keyExtractor={item => item.id.toString()}
						contentContainerStyle={homeStyles.podcastsGrid}
						ListEmptyComponent={
							<View style={homeStyles.emptyState}>
								<Ionicons
									name='mic'
									size={64}
									color={COLORS.textLight}
								/>
								<Text style={homeStyles.emptyTitle}>
									No Podcasts Found
								</Text>
								<Text style={homeStyles.emptyDescription}>
									Try a different genre
								</Text>
							</View>
						}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
