import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgPhoneArrowComponent(props) {
  return (
    <Svg
      width={12}
      height={6}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l5 4 5-4"
        stroke="#D9DDE0"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgPhoneArrowComponent