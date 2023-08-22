import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import { MoviesDTO } from "src/dtos/MoviesDTO";

interface IMovieRateProps extends TouchableOpacityProps {
  item: MoviesDTO;
}

export function MoviePoster({ item, onPress, ...rest }: IMovieRateProps) {
  return (
    <S.Container onPress={onPress} {...rest}>
      <S.MoviePoster
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
    </S.Container>
  );
}
