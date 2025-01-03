import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Delete = ({ style, color = "#181C2E", ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" style={style} {...props}>
    <Rect  fill="#F58731" rx={10} />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.644 2.121c.194 0 .356.162.356.367v.19c0 .201-.162.367-.356.367H.357A.365.365 0 0 1 0 2.678v-.19c0-.205.162-.367.357-.367h1.458c.296 0 .554-.21.62-.507l.077-.341C2.63.808 3.02.5 3.468.5h2.064c.442 0 .837.308.952.748l.081.365a.64.64 0 0 0 .62.508h1.459Zm-.741 6.946c.152-1.418.419-4.788.419-4.822a.373.373 0 0 0-.09-.28.363.363 0 0 0-.262-.116H1.034c-.1 0-.195.043-.261.117a.395.395 0 0 0-.096.279l.027.323c.07.882.269 3.337.396 4.499.09.856.652 1.394 1.466 1.413.628.015 1.275.02 1.936.02.623 0 1.255-.005 1.903-.02.841-.014 1.403-.543 1.498-1.413Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Delete;

