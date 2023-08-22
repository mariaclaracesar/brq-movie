import { Pressable } from "react-native";
import styled from "styled-components/native";

type Props = {
  isActive?: boolean;
};

export const Container = styled(Pressable)`
  width: 50%;
`;

export const BorderList = styled.View<Props>`
  margin-top: ${({ theme }) => theme.dimensions.XXNano8};
  border-bottom-width: ${({ isActive }) => (isActive ? `2px` : `1px`)};
  border-color: ${({ theme, isActive }) =>
    isActive ? `${theme.colors.Primary}` : `${theme.colors.Tertiary}`};
`;

export const ListMovies = styled.Text<Props>`
  padding-horizontal: 30px;

  font-family: ${({ theme }) => theme.fonts.Nunito.bold};
  font-size: ${({ theme }) => theme.dimensions.XXSmall16};
  color: ${({ theme, isActive }) =>
    isActive ? `${theme.colors.Primary}` : `${theme.colors.Grey}`};
`;
