import React from "react";
import { useSpring, animated } from "react-spring";
export default function Cardinfo(props) {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <div>
      <animated.div className="n-card-info" style={style}>
        <p className="n-card-title">{props.title}</p>
        <p className="n-card-sub">{props.subTitle}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </animated.div>
    </div>
  );
}
