const API_KEY = "514c653b97bd439cb5e20c4feee2259d";
const requests = {
    fetchAdventure: `https://api.rawg.io/api/games?page_size=100&genres=adventure&key=${API_KEY}`,
    fetchAction: `https://api.rawg.io/api/games?page_size=100&genres=action&key=${API_KEY}`,
    fetchSports: `https://api.rawg.io/api/games?pages_size=100&genres=sports&key=${API_KEY}`,
    fetchArcade: `https://api.rawg.io/api/games?pages_size=100&genres=arcade&key=${API_KEY}`,
    fetchShooter:  `https://api.rawg.io/api/games?pages_size=100&genres=shooter&key=${API_KEY}`,
    fetchSimulation: `https://api.rawg.io/api/games?pages_size=100&genres=simulation&key=${API_KEY}`,
};
export default requests;