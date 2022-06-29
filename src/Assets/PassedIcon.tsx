import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={12}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.333 9.772l-3.92-3.919A1 1 0 001 7.267l3.919 3.92a2 2 0 002.829 0L17 1.933A1 1 0 0015.586.52L6.333 9.772z"
        fill="#94C200"
      />
    </Svg>
  );
}

export default SvgComponent;
