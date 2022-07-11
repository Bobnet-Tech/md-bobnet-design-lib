import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.727.848a1.788 1.788 0 00-2.528 0L12 9.046 3.801.848a1.788 1.788 0 00-2.528 2.528l8.2 8.198-8.2 8.199A1.788 1.788 0 003.801 22.3L12 14.102l8.199 8.199a1.788 1.788 0 002.528-2.528l-8.2-8.199 8.2-8.198a1.788 1.788 0 000-2.528z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
