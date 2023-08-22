import React, { ReactNode } from "react";

import * as S from "./styles";

interface Ellipse {
  icon?: ReactNode;
  color?: string;
}

export function Ellipse({ icon, color }: Ellipse) {
  return <S.Container color={color}>{icon}</S.Container>;
}
