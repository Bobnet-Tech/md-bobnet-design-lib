import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_4499_3268)">
        <Path
          d="M19.744 13.95a2.584 2.584 0 010 3.648l-.759.874c-6.824 6.534-23.433-10.07-17-16.917l.959-.833A2.567 2.567 0 016.55.755c.025.026 1.57 2.032 1.57 2.032a2.583 2.583 0 01-.006 3.568L7.149 7.57a10.651 10.651 0 005.776 5.787l1.22-.97a2.583 2.583 0 013.568-.006s2.005 1.544 2.03 1.57zm-1.147 1.211s-1.994-1.534-2.02-1.56a.916.916 0 00-1.29 0c-.023.023-1.704 1.363-1.704 1.363a.835.835 0 01-.816.126 12.508 12.508 0 01-7.35-7.34.833.833 0 01.12-.833S6.877 5.235 6.9 5.214a.917.917 0 000-1.291c-.026-.025-1.56-2.021-1.56-2.021a.917.917 0 00-1.259.033l-.958.833C-1.58 8.42 12.813 22.015 17.767 17.334l.76-.875a.934.934 0 00.07-1.298z"
          fill="#94C200"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4499_3268">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
