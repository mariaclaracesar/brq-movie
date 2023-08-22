import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
  isDisabled?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  padding: ${({ theme }) =>
    `${theme.dimensions.XNano10} ${theme.dimensions.XSmal24}`};

  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? `${theme.colors.Grey}` : `${theme.colors.Primary}`};
`;

export const Label = styled.Text<Props>`
  font-size: ${({ theme }) => theme.dimensions.XXXSmall14};
  font-family: ${({ theme }) => theme.fonts.Roboto.regular};

  color: ${({ theme, isDisabled }) =>
    isDisabled ? `${theme.colors.Neutral}` : `${theme.colors.Secondary}`};
`;
