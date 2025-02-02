import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const GoogleIcon = (props: SvgProps) => {
  const {
    width = 33,
    height = 33,
    fill = '#000',
    stroke = '#000',
    ...rest
  } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 33 33" {...rest}>
      {/* <Rect width={24} height={24} transform="translate(5 6)" fill="white" /> */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.34 16.875C32.34 15.705 32.235 14.58 32.04 13.5H16.5V19.8825H25.38C24.9975 21.945 23.835 23.6925 22.0875 24.8625V29.0025H27.42C30.54 26.13 32.34 21.9 32.34 16.875Z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4999 32.9998C20.9549 32.9998 24.6899 31.5223 27.4199 29.0023L22.0874 24.8623C20.6099 25.8523 18.7199 26.4373 16.4999 26.4373C12.2024 26.4373 8.56488 23.5348 7.26738 19.6348H1.75488V23.9098C4.46988 29.3023 10.0499 32.9998 16.4999 32.9998Z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2675 19.6351C6.9375 18.6451 6.75 17.5876 6.75 16.5001C6.75 15.4126 6.9375 14.3551 7.2675 13.3651V9.09009H1.755C0.6375 11.3176 0 13.8376 0 16.5001C0 19.1626 0.6375 21.6826 1.755 23.9101L7.2675 19.6351Z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4999 6.5625C18.9224 6.5625 21.0974 7.395 22.8074 9.03L27.5399 4.2975C24.6824 1.635 20.9474 0 16.4999 0C10.0499 0 4.46988 3.6975 1.75488 9.09L7.26738 13.365C8.56488 9.465 12.2024 6.5625 16.4999 6.5625Z"
        fill="#EA4335"
      />
    </Svg>
  );
};
export default GoogleIcon;
