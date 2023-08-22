import React, { useCallback, useState } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import theme from "@styles/theme";
import * as S from "./styles";

import { Card } from "@components/Card";

import { MoviesAPI } from "@services/moviesApi";
import { MovieDetailsDTO } from "@dtos/MovieDetailsDTO";

import { Heart } from "@assets/Icons/Heart";
import { Star } from "@assets/Icons/Star";
import { Ellipse } from "@components/Ellipse";
import { LeftArrow } from "@assets/Icons/LeftArrow";
import { HeartBlack } from "@assets/Icons/HeartBlack";
import { Calandar } from "@assets/Icons/Calandar";

type Props = {
  route: {
    params: {
      movieId: number;
    };
  };
};

export function MovieSinopse({ route }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsDTO>(
    {} as MovieDetailsDTO
  );
  const navigation = useNavigation();

  const { movieId } = route.params;
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const fixedBarStyles = useAnimatedStyle(() => {
    return {
      position: "absolute",
      paddingTop: 62,
      zIndex: 1,
      backgroundColor: theme.colors.Tertiary,
      width: "100%",
      opacity: interpolate(scrollY.value, [30, 70], [0, 10], Extrapolate.CLAMP),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [30, 70],
            [-40, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingBottom: 20,
      justifyContent: "space-between",
    };
  });

  const LoadMovieDetails = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesAPI.getMovieDetails(movieId);
      setMovieDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error("Ops! We had an error to get the movie details!");
    }
  };

  const handleGoBack = () => {
    return navigation.goBack();
  };

  useFocusEffect(
    useCallback(() => {
      LoadMovieDetails();
    }, [])
  );

  return (
    <S.Container>
      <Animated.View style={fixedBarStyles}>
        <S.EllipseButton onPress={handleGoBack}>
          <Ellipse icon={<LeftArrow color={theme.colors.Primary} />} />
        </S.EllipseButton>

        <S.TitleMovie>{movieDetails.title}</S.TitleMovie>

        <S.EllipseButton>
          <Ellipse icon={<HeartBlack />} color={theme.colors.Secondary} />
        </S.EllipseButton>
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
      >
        <S.Header>
          <S.EllipseButton onPress={handleGoBack}>
            <Ellipse icon={<LeftArrow />} />
          </S.EllipseButton>

          <S.EllipseButton>
            <Ellipse icon={<HeartBlack />} color={theme.colors.Secondary} />
          </S.EllipseButton>
        </S.Header>
        <S.ImageMovie>
          <S.ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
            }}
            resizeMode="cover"
          />
        </S.ImageMovie>

        <S.DescriptionMovie>
          <S.MovieName>{movieDetails.title}</S.MovieName>
          <S.Sinopse>SINOPSE</S.Sinopse>
          <S.TextSinopse>{movieDetails.overview}</S.TextSinopse>
        </S.DescriptionMovie>

        <S.Cards>
          <S.EllipseCard>
            <Card
              label="Popularidade"
              text={movieDetails.popularity}
              cardIcon={<Heart />}
            />
          </S.EllipseCard>

          <S.EllipseCard>
            <Card
              label="Votos"
              text={movieDetails.vote_average}
              cardIcon={<Star />}
            />
          </S.EllipseCard>
        </S.Cards>

        <S.Cards>
          <S.EllipseCard>
            <Card
              label="Lançamento"
              text={movieDetails.release_date}
              cardIcon={<Calandar />}
            />
          </S.EllipseCard>
        </S.Cards>
      </Animated.ScrollView>
    </S.Container>
  );
}
