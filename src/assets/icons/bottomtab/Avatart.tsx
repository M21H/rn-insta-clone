import * as React from 'react';
import Svg, {
  Circle,
  Mask,
  G,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';
const IconSvgAvatar = () => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Circle cx={12.5} cy={12.5} r={11.25} stroke="#000" strokeWidth={1.5} />
    <Mask
      id="a"
      style={{maskType: 'alpha'}}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={21}
      height={21}>
      <Circle cx={12.5} cy={12.5} r={10.5} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="url(#b)" d="M-4.65-10.25h34.23v45.57H-4.65z" />
    </G>
    <Defs>
      <Pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#c" transform="scale(.00033)" />
      </Pattern>
      <Image
        id="c"
        width={3024}
        height={4032}
      />
    </Defs>
  </Svg>
);
export default IconSvgAvatar;