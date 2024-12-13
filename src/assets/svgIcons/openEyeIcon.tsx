import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
const OpenEyeIcon = () => (
  <Svg viewBox="0 0 24 24"
    width={24}
    height={24}
  >
    <Path d="m0 0h24v24h-24z" fill="#fff" opacity={0} />
    <G fill="#231f20">
      <Path d="m21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zm-9.65 5.5c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z" />
      <Path d="m12 8.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0 -3.5-3.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1 -1.5 1.5z" />
    </G>
  </Svg>
);
export default OpenEyeIcon;
