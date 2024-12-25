import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Myorder = ({ style, color = "#000", ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" style={style} {...props}>
    <Rect width={40} height={40} x={0.945} y={0.5} fill="#EEE" rx={7} />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M24.08 16.076h.163c2.154 0 3.902 1.8 3.902 4.008V24.5c0 2.208-1.748 4-3.902 4h-7.397c-2.154 0-3.902-1.792-3.902-4v-4.416c0-2.208 1.748-4.008 3.902-4.008h.164a3.654 3.654 0 0 1 1.045-2.528c.671-.68 1.53-1.024 2.497-1.048 1.935 0 3.504 1.6 3.527 3.576Zm-5.205-1.672a2.463 2.463 0 0 0-.695 1.672h4.729c-.024-1.312-1.07-2.376-2.357-2.376-.6 0-1.225.248-1.677.704Zm4.635 4.752a.592.592 0 0 0 .585-.6v-.928c0-.328-.258-.6-.585-.6a.597.597 0 0 0-.586.6v.928c0 .328.266.6.586.6Zm-5.416-.6c0 .328-.257.6-.585.6a.597.597 0 0 1-.585-.6v-.928c0-.328.265-.6.585-.6.328 0 .585.272.585.6v.928Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Myorder;
