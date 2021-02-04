const API_KEY = "d1fd1e453902c26c3234c4bd04cf5c4b";


const request = {
   fetchTrending: `/trending/all/week?api_key=d1fd1e453902c26c3234c4bd04cf5c4b&language=en-US`,

   fetchNetflixOrginals: `/discover/tv?api_key=d1fd1e453902c26c3234c4bd04cf5c4b&language=en-US`,
   fetchTopRated: `/movie/top_rated?api_key=8a9121945fb215b83aac6b1896a8adfe&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=8a9121945fb215b83aac6b1896a8adfe&with_genres=35`,
   fetchComedyMovies: `/discover/movie?api_key=8a9121945fb215b83aac6b1896a8adfe&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=8a9121945fb215b83aac6b1896a8adfe&with_genres=28`,
   fetchRomanticMovies: `/discover/movie?api_key=8a9121945fb215b83aac6b1896a8adfe&with_genres=37`,
   fetchDocumertaries: `/discover/movie?api_key=8a9121945fb215b83aac6b1896a8adfe&with_genres=10749`,
};
export default request;