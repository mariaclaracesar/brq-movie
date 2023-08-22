import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.dimensions.XXSmall16};

  background-color: ${({ theme }) => theme.colors.Neutral};
`;

export const ImageLogo = styled.View`
  align-items: center;

  margin-top: 92px;
`;

export const Image = styled.Image``;

export const Inputs = styled.View`
  margin-top: ${({ theme }) => theme.dimensions.XLarge64};
  gap: ${({ theme }) => theme.dimensions.XMedium48};
`;

export const ButtonDock = styled.View`
  margin-top: ${({ theme }) => theme.dimensions.Large56};
`;

export const TextPassword = styled.Pressable`
  align-items: center;

  margin-top: ${({ theme }) => theme.dimensions.Small32};
`;

export const ForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Roboto.medium};
  color: ${({ theme }) => theme.colors.Secondary};
  font-size: ${({ theme }) => theme.dimensions.XXXSmall14};
`;
