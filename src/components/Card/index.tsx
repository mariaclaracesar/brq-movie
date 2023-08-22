import React, { ReactNode } from "react";

import * as S from "./styles";
import { Ellipse } from "@components/Ellipse";

interface Props {
  label: string;
  text: any;
  cardIcon: ReactNode;
}

export function Card({ label, text, cardIcon }: Props) {
  return (
    <S.Container>
      <S.TextLabel>
        <Ellipse icon={cardIcon} />
        <S.Label>{label}</S.Label>
      </S.TextLabel>

      <S.TextData>
        <S.Data>{text}</S.Data>
      </S.TextData>
    </S.Container>
  );
}
