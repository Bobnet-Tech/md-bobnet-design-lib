import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.674.326a1.112 1.112 0 00-1.573 0L7 5.427 1.899.326A1.112 1.112 0 00.326 1.899L5.427 7 .326 12.101a1.112 1.112 0 001.573 1.573L7 8.573l5.101 5.101a1.112 1.112 0 001.573-1.573L8.573 7l5.101-5.101a1.112 1.112 0 000-1.573z"
        fill="#FF762B"
      />
    </Svg>
  );
}

export default SvgComponent;
