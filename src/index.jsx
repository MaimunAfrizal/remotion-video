
import React from "react";
import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { Video } from "./Video";

const RemotionRoot = () => {
  return (
    <Composition
      id="MainVideo"
      component={Video}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

registerRoot(RemotionRoot);
