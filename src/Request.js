const API_KEY = "8a9121945fb215b83aac6b1896a8adfe";


const request = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/disconver/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/disconver/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/disconver/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanticMovies: `/disconver/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumertaries: `/disconver/movie?api_key=${API_KEY}&with_genres=99`,
}