import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.8;

export const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white
	},
	scrollContent: {
		paddingBottom: 32
	},
	welcomeSection: {
		paddingTop: 20,
		paddingBottom: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	welcomeText: {
		fontSize: 32,
		fontWeight: "800",
		color: COLORS.text,
		letterSpacing: -0.5
	},
	featuredSection: {
		paddingTop: 16,
		marginBottom: 24,
		paddingHorizontal: 16
	},
	featuredCard: {
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: COLORS.card,
		shadowColor: COLORS.shadow,
		shadowOffset: {
			width: 0,
			height: 12
		},
		shadowOpacity: 0.2,
		shadowRadius: 16,
		elevation: 12
	},
	featuredImageContainer: {
		height: 180,
		backgroundColor: COLORS.primary,
		position: "relative"
	},
	featuredImage: {
		width: "100%",
		height: "100%"
	},
	featuredOverlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.3)",
		justifyContent: "space-between",
		padding: 20
	},
	featuredBadge: {
		backgroundColor: COLORS.primary,
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20,
		alignSelf: "flex-start"
	},
	featuredBadgeText: {
		color: COLORS.white,
		fontSize: 12,
		fontWeight: "600"
	},
	featuredContent: {
		justifyContent: "flex-end"
	},
	featuredTitle: {
		fontSize: 20,
		fontWeight: "800",
		color: COLORS.white,
		marginBottom: 12,
		textShadowColor: "rgba(0,0,0,0.3)",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 4
	},
	featuredMeta: {
		flexDirection: "row",
		gap: 16
	},
	metaItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4
	},
	metaText: {
		fontSize: 14,
		color: COLORS.white,
		fontWeight: "600"
	},
	podcastsSection: {
		paddingHorizontal: 16,
		marginTop: 8
	},
	sectionHeader: {
		marginBottom: 16
	},
	sectionTitle: {
		fontSize: 22,
		fontWeight: "800",
		color: COLORS.text,
		letterSpacing: -0.5
	},
	podcastsGrid: {
		gap: 20
	},
	row: { justifyContent: "space-between" ,gap: 16,},
	emptyState: {
		
		alignItems: "center",
		paddingVertical: 64,
		paddingHorizontal: 32
	},
	emptyTitle: {
		fontSize: 20,
		fontWeight: "700",
		color: COLORS.text,
		marginTop: 16,
		marginBottom: 8
	},
	emptyDescription: {
		fontSize: 14,
		color: COLORS.textLight,
		textAlign: "center"
	},
	genreFilterContainer: {
		marginVertical: 16
	},
	genreFilterScrollContent: {
		paddingHorizontal: 16,
		gap: 12
	},
	genreButton: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.card,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: COLORS.border,
		minWidth: 80,
		shadowColor: COLORS.shadow,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.05,
		shadowRadius: 4,
		elevation: 2
	},
	selectedGenre: {
		backgroundColor: COLORS.primary,
		borderColor: COLORS.primary,
		shadowOpacity: 0.15
	},
	genreImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginBottom: 4,
		backgroundColor: COLORS.border
	},
	selectedGenreImage: {
		borderWidth: 2,
		borderColor: COLORS.white
	},
	genreText: {
		fontSize: 12,
		fontWeight: "600",
		color: COLORS.text,
		textAlign: "center"
	},
	selectedGenreText: {
		color: COLORS.white
	}
});

export const podcastCardStyles = StyleSheet.create({
	container: {
		width: cardWidth,
		flexDirection: "row",
		backgroundColor: COLORS.card,
		borderRadius: 8,
		marginBottom: 16
	},
	imageContainer: {
		position: "relative",
		height: 100,
		width: 80
	},
	image: {
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.border,
		borderRadius: 4
	},
	content: {
		paddingHorizontal: 20,
		justifyContent: "space-between"
	},
	title: {
		fontSize: 15,
		fontWeight: "700",
		color: COLORS.text,
		marginBottom: 4,
		lineHeight: 20
	},
	description: {
		fontSize: 12,
		color: COLORS.textLight,
		marginBottom: 8,
		lineHeight: 16
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 20
	},
	timeContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	timeText: {
		fontSize: 11,
		color: COLORS.textLight,
		marginLeft: 4,
		fontWeight: "500"
	},
	listenContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	listenText: {
		fontSize: 11,
		color: COLORS.textLight,
		marginLeft: 4,
		fontWeight: "500"
	}
});
