import styled from "styled-components/native";

export const Container = styled.View`
  height: 56px;
  width: 100%;
  flex-direction: row;

  padding: 16px 16px 16px 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.Secondary};

  background-color: ${({ theme }) => theme.colors.Tertiary};
`;

export const IconLeft = styled.View`
  padding-right: ${({ theme }) => theme.dimensions.Nano12};
`;

export const InputTitle = styled.View`
  flex: 1;
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.Secondary};
  font-size: ${({ theme }) => theme.dimensions.XXSmall16};
  font-family: ${({ theme }) => theme.fonts.Roboto.regular};
`;

export const IconRight = styled.View``;
