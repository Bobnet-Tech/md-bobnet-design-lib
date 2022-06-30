import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_4340_4365)" fill="#E4E4E4">
        <Path d="M23.27 9.42C21.72 6.892 18.193 2.654 12 2.654 5.808 2.655 2.28 6.893.729 9.42a4.908 4.908 0 000 5.162c1.55 2.526 5.079 6.764 11.27 6.764 6.193 0 9.72-4.238 11.272-6.764a4.909 4.909 0 000-5.162zm-1.704 4.114C20.234 15.7 17.219 19.345 12 19.345c-5.22 0-8.234-3.645-9.566-5.81a2.918 2.918 0 010-3.069C3.766 8.3 6.78 4.656 12 4.656s8.234 3.64 9.566 5.81a2.918 2.918 0 010 3.068z" />
        <Path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-5.999A3 3 0 0112 15z" />
      </G>
      <Defs>
        <ClipPath id="clip0_4340_4365">
          <Path fill="#E4E4E4" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
