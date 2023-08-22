import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;

  margin-top: ${({ theme }) => theme.dimensions.Small32};

  justify-content: center;
  align-items: center;
`;

export const MoviePoster = styled.Image`
  width: 156px;
  height: 228px;

  border-radius: ${({ theme }) => theme.dimensions.XXNano8};
`;
