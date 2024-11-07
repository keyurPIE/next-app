"use client";

import { CSSProperties } from "react";
import Lottie from "react-lottie-player";

interface LottieAnimatorProps {
  data: any;
  loop?: boolean;
  style?: CSSProperties | any;
}

const LottieAnimator = ({ data, loop, style }: LottieAnimatorProps) => {
  return (
    <Lottie
      loop={loop}
      play
      animationData={data}
      style={{
        ...style,
      }}
    />
  );
};

export default LottieAnimator;
