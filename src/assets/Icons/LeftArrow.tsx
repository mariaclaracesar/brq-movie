import React from "react";
import { Svg, Path, Defs, Polyline, G } from "react-native-svg";

interface Props {
  color?: string;
}

export function LeftArrow({ color = "#ffff" }: Props) {
  return (
    <Svg width="12px" height="12px" viewBox="0 0 24 24">
      <Defs />
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
      >
        <G
          id="Artboard-4"
          transform="translate(-444.000000, -1046.000000)"
          stroke={color}
          stroke-width="2"
        >
          <G id="Extras" transform="translate(48.000000, 1046.000000)">
            <G id="left" transform="translate(396.000000, 0.000000)">
              <Path d="M4,12 L21,12" id="Path-58" />
              <Polyline
                id="Path-59"
                stroke-linejoin="round"
                transform="translate(7.000000, 12.000000) scale(-1, 1) translate(-7.000000, -12.000000) "
                points="3 4 11 12 3 20"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
