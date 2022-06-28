import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.833 7.02V5.833a5.833 5.833 0 00-11.667 0V7.02a4.167 4.167 0 00-2.5 3.813v5A4.172 4.172 0 005.833 20h8.333a4.171 4.171 0 004.167-4.167v-5a4.167 4.167 0 00-2.5-3.813zm-10-1.187a4.167 4.167 0 018.333 0v.834H5.833v-.834zm10.833 10a2.5 2.5 0 01-2.5 2.5H5.833a2.5 2.5 0 01-2.5-2.5v-5a2.5 2.5 0 012.5-2.5h8.333a2.5 2.5 0 012.5 2.5v5z"
        fill="#94C200"
      />
      <Path
        d="M10 11.667a.833.833 0 00-.834.833v1.667a.833.833 0 101.667 0V12.5a.833.833 0 00-.834-.833z"
        fill="#94C200"
      />
    </Svg>
  );
}

export default SvgComponent;
