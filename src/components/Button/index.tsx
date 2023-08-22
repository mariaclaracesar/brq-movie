import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  label: string;
};

export function Button({ label, onPress, disabled = false, ...rest }: Props) {
  return (
    <S.Container
      isDisabled={disabled}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <S.Label isDisabled={disabled}>{label}</S.Label>
    </S.Container>
  );
}
