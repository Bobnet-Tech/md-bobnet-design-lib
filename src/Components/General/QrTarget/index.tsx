import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const QrTarget = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    preserveAspectRatio="none"
    fill={props.color}
    viewBox="0 0 512 512"
    style={[
      {
        // @ts-ignore
        enableBackground: 'new 0 0 512 512',
      },
      props.style,
    ]}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M8 176a8 8 0 0 0 8-8V16h152a8 8 0 0 0 0-16H8a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8zM168 496H16V344a8 8 0 0 0-16 0v160a8 8 0 0 0 8 8h160a8 8 0 0 0 0-16zM504 336a8 8 0 0 0-8 8v152H344a8 8 0 0 0 0 16h160a8 8 0 0 0 8-8V344a8 8 0 0 0-8-8zM504 0H344a8 8 0 0 0 0 16h152v152a8 8 0 0 0 16 0V8a8 8 0 0 0-8-8zM328 248h-64v-64a8 8 0 0 0-16 0v64h-64a8 8 0 0 0 0 16h64v64a8 8 0 0 0 16 0v-64h64a8 8 0 0 0 0-16z" />
  </Svg>
);

export default QrTarget;
