
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

export const Video = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 60], [0.7, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #09091f, #172554, #581c87)",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 30, color: "#c4b5fd" }}>
          WELCOME TO
        </div>
        <div style={{ fontSize: 76, fontWeight: "bold" }}>
          MY WORLD
        </div>
        <div style={{ fontSize: 25, marginTop: 20 }}>
          Created with Remotion
        </div>
      </div>
    </AbsoluteFill>
  );
};
