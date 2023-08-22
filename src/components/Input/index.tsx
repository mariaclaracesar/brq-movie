import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

interface Props extends TextInputProps {
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

export function Input({ rightIcon, leftIcon, ...rest }: Props) {
  return (
    <S.Container>
      <S.IconLeft>{leftIcon}</S.IconLeft>

      <S.InputTitle>
        <S.InputText {...rest}></S.InputText>
      </S.InputTitle>

      <S.IconRight>{rightIcon}</S.IconRight>
    </S.Container>
  );
}
