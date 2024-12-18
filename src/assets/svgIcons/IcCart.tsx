import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type props = {
  width: number;
  height: number;
};
const IcCart = ({width, height}: props) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18.965 13.3784L20.8687 6.89387H5.38381L7.28747 13.3784H18.965ZM16.4609 15.2998C17.1097 15.2998 17.6973 15.5629 18.1226 15.9882C18.5479 16.4135 18.811 17.001 18.811 17.6499C18.811 18.2988 18.5479 18.8863 18.1226 19.3116C17.6973 19.7369 17.1097 20 16.4609 20C15.812 20 15.2245 19.7369 14.7992 19.3116C14.3739 18.8863 14.1108 18.2988 14.1108 17.6499C14.1108 17.001 14.3739 16.4135 14.7992 15.9882C15.2245 15.5629 15.812 15.2998 16.4609 15.2998ZM17.3217 16.7891C17.1016 16.5689 16.7969 16.4326 16.4609 16.4326C16.1248 16.4326 15.8202 16.5689 15.6 16.7891C15.3799 17.0092 15.2436 17.3132 15.2436 17.6499C15.2436 17.9859 15.3799 18.2906 15.6 18.5107C15.8202 18.7309 16.1248 18.8672 16.4609 18.8672C16.7969 18.8672 17.1016 18.7309 17.3217 18.5107C17.5419 18.2906 17.6782 17.9859 17.6782 17.6499C17.6782 17.3139 17.5419 17.0092 17.3217 16.7891ZM9.79091 15.2998C10.4398 15.2998 11.0273 15.5629 11.4526 15.9882C11.8779 16.4135 12.141 17.001 12.141 17.6499C12.141 18.2988 11.8779 18.8863 11.4526 19.3116C11.0273 19.7369 10.4398 20 9.79091 20C9.14205 20 8.55453 19.7369 8.12922 19.3116C7.70391 18.8863 7.44082 18.2988 7.44082 17.6499C7.44082 17.001 7.70391 16.4135 8.12922 15.9882C8.55453 15.5629 9.14205 15.2998 9.79091 15.2998ZM10.6518 16.7891C10.4316 16.5689 10.1269 16.4326 9.79091 16.4326C9.45489 16.4326 9.15023 16.5689 8.93008 16.7891C8.70993 17.0092 8.57361 17.3132 8.57361 17.6499C8.57361 17.9859 8.70993 18.2906 8.93008 18.5107C9.15023 18.7309 9.45489 18.8672 9.79091 18.8672C10.1269 18.8672 10.4316 18.7309 10.6518 18.5107C10.8719 18.2906 11.0082 17.9859 11.0082 17.6499C11.0082 17.3139 10.8719 17.0092 10.6518 16.7891ZM4.07449 6.44676L3.39496 4.13279H0.566394C0.253548 4.13279 0 3.87924 0 3.56639C0 3.25355 0.253548 3 0.566394 3H3.81754V3.00136C4.06222 3.00136 4.28715 3.16085 4.35939 3.4069L5.05052 5.76109H21.6232V5.76245C21.6763 5.76245 21.7295 5.76995 21.7827 5.78562C22.0819 5.87355 22.2536 6.18776 22.165 6.48697L19.9403 14.0648C19.8851 14.3197 19.6588 14.5112 19.3869 14.5112H6.86489V14.5099C6.6202 14.5099 6.39528 14.3504 6.32303 14.1043L4.09835 6.5265C4.08881 6.50128 4.08063 6.4747 4.07517 6.44676H4.07449Z"
      fill="#1D1D1D"
    />
  </Svg>
);
export default IcCart;