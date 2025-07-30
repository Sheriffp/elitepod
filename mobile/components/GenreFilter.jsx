import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { homeStyles } from "@/assets/styles/home.styles";

export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
	return (
		<View style={homeStyles.genreFilterContainer}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={homeStyles.genreFilterScrollContent}
			>
				<TouchableOpacity
					onPress={() => onSelectGenre(null)}
					style={[
						homeStyles.genreButton,
						selectedGenre === null && homeStyles.selectedGenre
					]}
				>
					<Text
						style={[
							homeStyles.genreText,
							selectedGenre === null &&
								homeStyles.selectedGenreText
						]}
					>
						All
					</Text>
				</TouchableOpacity>
				{genres.map(genre => {
					const isSelected = selectedGenre === genre.id;
					return (
						<TouchableOpacity
							key={genre.id}
							style={[
								homeStyles.genreButton,
								isSelected && homeStyles.selectedGenre
							]}
							onPress={() => onSelectGenre(genre.id)}
							activeOpacity={0.7}
						>
							<Text
								style={[
									homeStyles.genreText,
									isSelected && homeStyles.selectedGenreText
								]}
							>
								{genre.name}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}
