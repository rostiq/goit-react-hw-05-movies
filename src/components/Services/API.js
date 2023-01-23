import axios from 'axios';


export const trendingApi = async () => {
  try {
  const response = await axios.get(
  'https://api.themoviedb.org/3/trending/movie/day?api_key=d4b4feb49258af79577d4fcd29006df0'
  );
  return response.data.results;
  } catch (error) {
  console.log(error);
  }
  };


  export const movieIdApi = async (movieId) => {
  try { 
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=d4b4feb49258af79577d4fcd29006df0`
  );
  return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const movieCastApi = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d4b4feb49258af79577d4fcd29006df0`
      );
      return response.data;
      } catch (error) {
        console.log(error);
      }
};