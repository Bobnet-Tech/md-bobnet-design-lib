import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BobPhoneArrowIcon(props) {
  return (
    <Svg
      width={11}
      height={6}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.5.5l5 5 5-5"
        stroke="#41556B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BobPhoneArrowIcon
