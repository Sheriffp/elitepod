import { Client } from "podcast-api";
// import { LISTEN_NOTES_API_KEY } from "@env";

const client = Client({ apiKey: '3017d8e8782a4ab380892bc23d1c9208' });

export const searchPodcastByName = async query => {
	try {
		const response = await client.search({
			q: query,
			type: "podcast",
			language: "English"
		});
		return response.data;
	} catch (error) {
		console.log("Error in search by name", error);
		return null;
	}
};

export const getPodcastById = async podcastId => {
	try {
		const response = await client.fetchPodcastById({ id: podcastId });
		return response.data;
	} catch (error) {
		console.log("Error getting podcast details", error);
		return null;
	}
};

export const getPodcastGenres = async () => {
	try {
		const response = await client.fetchPodcastGenres({ top_level_only: 1 });
		return response.data.genres;
	} catch (error) {
		console.log("Error getting podcast genres", error);
		return [];
	}
};

export const getPodcastByGenre = async genreId => {
	try {
		const response = await client.fetchBestPodcasts({
			genre_id: genreId,
			language: "English"
		});
		return response.data.podcasts;
	} catch (error) {
		console.log("Error getting podcast by genre", error);
		return [];
	}
};

export const getRandomPodcast = async () => {
	try {
		const response = await client.justListen();
		return response.data;
	} catch (error) {
		console.log("Error getting random podcast", error);
		return null;
	}
};

export const getRelatedPodcast = async podcastId => {
	try {
		const response = await client.fetchRecommendationsForPodcast({
			id: podcastId
		});
		return response.data.recommendations;
	} catch (error) {
		console.log("Error fetching related podcast", error);
		return [];
	}
};
