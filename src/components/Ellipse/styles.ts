import styled from "styled-components/native";

interface Props {
  color?: string;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.Neutral};

  width: ${({ theme }) => theme.dimensions.XSmal24};
  height: ${({ theme }) => theme.dimensions.XSmal24};
  border-radius: ${({ theme }) => theme.dimensions.Nano12};

  justify-content: center;
  align-items: center;
`;
