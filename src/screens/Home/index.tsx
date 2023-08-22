import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ListRenderItem } from "react-native";

import * as S from "./styles";

import { ThreePointsIcon } from "@assets/Icons/ThreePointsIcon";

import { HeaderMovies } from "@components/HeaderMovies";

import { MoviePoster } from "@components/MoviePoster";
import { MoviesAPI } from "@services/moviesApi";
import { RoutesName } from "@utils/routesName";
import { MoviesDTO } from "@dtos/MoviesDTO";

export function Home() {
  const navigation = useNavigation();

  const [activeText, setActiveText] = useState(0);
  const [moviesList, setMoviesList] = useState<MoviesDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const selectedMovie = (id: number) => {
    navigation.navigate(RoutesName.MOVIE, {
      movieId: id,
    });
  };

  const loadMoviesNowPlaying = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesAPI.getMoviesListNowPlaying(page);

      setMoviesList(response.data.results);
    } catch (error) {
      console.log(error);
      throw new Error("Ops! We had an error to get the movies list!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoviesNowPlaying();
  }, [page]);

  const renderMovieItem: ListRenderItem<MoviesDTO> = ({ item }) => {
    return <MoviePoster item={item} onPress={() => selectedMovie(item.id)} />;
  };

  return (
    <S.Container>
      <S.Header>
        <S.LogoText>BRQ MOVIES</S.LogoText>

        <S.Points>
          <ThreePointsIcon />
        </S.Points>
      </S.Header>

      <S.SectionMovie>
        <HeaderMovies
          label="Todos os Filmes"
          isActive={activeText === 0}
          onPress={() => setActiveText(0)}
        />
        <HeaderMovies
          label="Filmes Favoritos"
          isActive={activeText === 1}
          onPress={() => setActiveText(1)}
        />
      </S.SectionMovie>

      <S.FlatListContainer>
        <FlatList
          data={moviesList}
          showsVerticalScrollIndicator={false}
          renderItem={renderMovieItem}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.1}
        />
      </S.FlatListContainer>
    </S.Container>
  );
}
