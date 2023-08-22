import React from "react";

import * as S from "./styles";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
};

export function HeaderMovies({ isActive, label, onPress, ...rest }: Props) {
  return (
    <S.Container onPress={onPress} {...rest}>
      <S.ListMovies isActive={isActive}>{label}</S.ListMovies>
      <S.BorderList isActive={isActive} />
    </S.Container>
  );
}
