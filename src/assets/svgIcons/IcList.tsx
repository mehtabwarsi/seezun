import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const IcList = () => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M6.75 11.5H16.25M11.5 6.75V16.25"
      stroke="#8E8E8E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect x={2.5} y={2.5} width={18} height={18} rx={3.5} stroke="#8E8E8E" />
  </Svg>
);
export default IcList
