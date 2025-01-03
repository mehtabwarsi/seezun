import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
const CloseEyeIcon = () => (
    <Svg
        fill="none"
        height={20}
        viewBox="0 0 24 24"
        width={20}
    >
        <G
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <Path d="m2 2 20 20" />
            <Path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335" />
            <Path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192" />
        </G>
    </Svg>
);
export default CloseEyeIcon;
