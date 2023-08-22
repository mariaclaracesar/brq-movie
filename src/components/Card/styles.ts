import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.dimensions.XXNano8};

  border-radius: ${({ theme }) => theme.dimensions.XXNano8};
  background-color: ${({ theme }) => theme.colors.Tertiary};
`;

export const TextLabel = styled.View`
  flex-direction: row;
  align-items: center;

  gap: ${({ theme }) => theme.dimensions.XXNano8};
  margin-top: ${({ theme }) => theme.dimensions.XXNano8};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.Primary};
  font-size: ${({ theme }) => theme.dimensions.XXXSmall14};
  font-family: ${({ theme }) => theme.fonts.Nunito.bold};
`;

export const TextData = styled.View`
  margin-top: ${({ theme }) => theme.dimensions.XXNano8};
`;

export const Data = styled.Text`
  color: ${({ theme }) => theme.colors.Secondary};
  font-size: ${({ theme }) => theme.dimensions.XSSSmall20};
  font-family: ${({ theme }) => theme.fonts.Nunito.bold};
`;
