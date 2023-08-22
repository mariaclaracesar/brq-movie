import api from "./api";

const API_KEY = "728fae13a07998da4c351e4c4616a22e";

export const MoviesAPI = {
  getMoviesListNowPlaying: async (page_number: number) => {
    return (await api).get(
      `movie/now_playing?api_key=${API_KEY}&pt-BR&page=${page_number}`
    );
  },

  getMovieDetails: async (movie_id: number) => {
    return (await api).get(
      `movie/${movie_id}?api_key=${API_KEY}&language=pt-BR`
    );
  },
};
