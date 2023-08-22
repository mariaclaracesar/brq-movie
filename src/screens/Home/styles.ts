import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Neutral};
`;

export const Header = styled.View`
  margin-top: 60px;
  padding: ${({ theme }) => theme.dimensions.XXSmall16};

  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const Points = styled.Pressable``;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito.regular};
  font-size: ${({ theme }) => theme.dimensions.XSSamal22};
  color: ${({ theme }) => theme.colors.Secondary};
`;

export const ThreePoints = styled.Image`
  flex: 1;
`;

export const SectionMovie = styled.View`
  flex-direction: row;
  margin-top: 28px;
`;

export const FlatListContainer = styled.View`
  flex: 1;
  padding-horizontal: 16px;
`;
