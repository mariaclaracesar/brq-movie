import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.dimensions.XMedium48};

  background-color: ${({ theme }) => theme.colors.Neutral};
`;

export const Header = styled.View`
  position: absolute;

  width: 100%;
  z-index: 2;
  flex-direction: row;
  padding: ${({ theme }) => theme.dimensions.XXSmall16};
  justify-content: space-between;

  margin-top: 62px;
`;

export const EllipseButton = styled.TouchableOpacity``;

export const TitleMovie = styled.Text`
  font-size: ${({ theme }) => theme.dimensions.XSSamal22};
  font-family: ${({ theme }) => theme.fonts.Nunito.regular};
  color: ${({ theme }) => theme.colors.Secondary};
`;

export const ImageMovie = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.Image`
  width: 390px;
  height: 526px;
  z-index: 1;
`;

export const DescriptionMovie = styled.View`
  margin-top: ${({ theme }) => theme.dimensions.Small32};
  padding-horizontal: ${({ theme }) => theme.dimensions.XXSmall16};
`;

export const MovieName = styled.Text`
  color: ${({ theme }) => theme.colors.Secondary};
  font-family: ${({ theme }) => theme.fonts.Nunito.bold};
  font-size: 28px;
`;

export const Sinopse = styled.Text`
  margin-top: ${({ theme }) => theme.dimensions.XXSmall16};

  color: ${({ theme }) => theme.colors.Primary};
  font-family: ${({ theme }) => theme.fonts.Nunito.bold};
  font-size: ${({ theme }) => theme.dimensions.XXXSmall14};
`;

export const TextSinopse = styled.Text`
  margin-top: ${({ theme }) => theme.dimensions.XXSmall16};
  margin-bottom: ${({ theme }) => theme.dimensions.XXSmall16};

  color: ${({ theme }) => theme.colors.Secondary};
  font-family: ${({ theme }) => theme.fonts.Nunito.regular};
  font-size: ${({ theme }) => theme.dimensions.XXSmall16};
`;

export const Cards = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.dimensions.XXSmall16};

  justify-content: space-between;
  padding-horizontal: ${({ theme }) => theme.dimensions.XXSmall16};
`;

export const EllipseCard = styled.View`
  width: 48%;
`;
