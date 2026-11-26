
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Video = () => {
  const frame = useCurrentFrame();

  const fade = (start, end) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  const move = interpolate(
    frame,
    [0, 90, 180, 300, 450],
    [0, -15, 10, -10, 0],
    { extrapolateRight: "clamp" }
  );

  const scene1 = fade(0, 15) * (1 - fade(80, 95));
  const scene2 = fade(85, 100) * (1 - fade(170, 185));
  const scene3 = fade(175, 190) * (1 - fade(290, 305));
  const scene4 = fade(295, 310) * (1 - fade(380, 395));
  const scene5 = fade(385, 405);

  const textStyle = {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 4px 12px #0008",
  };

  const character = (lookingAtScreen = false) => (
    <div
      style={{
        position: "absolute",
        top: 390,
        left: "50%",
        transform: `translateX(-50%) translateY(${move}px)`,
        width: 430,
        height: 650,
      }}
    >
      {/* Rambut */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 75,
        width: 280,
        height: 220,
        borderRadius: "48% 48% 35% 35%",
        background: "#713c20",
      }} />

      {/* Wajah */}
      <div style={{
        position: "absolute",
        top: 55,
        left: 95,
        width: 240,
        height: 290,
        borderRadius: "45% 45% 48% 48%",
        background: "#edb17f",
        boxShadow: "inset -15px -8px 20px #b87552",
      }}>
        {/* Mata */}
        <div style={{
          position: "absolute",
          top: 115,
          left: 40,
          display: "flex",
          gap: 65,
        }}>
          {[0, 1].map((eye) => (
            <div key={eye} style={{
              width: 28,
              height: 35,
              borderRadius: "50%",
              background: "#292323",
              border: "5px solid white",
            }} />
          ))}
        </div>
        {/* Senyum */}
        <div style={{
          position: "absolute",
          top: 210,
          left: 85,
          width: 70,
          height: 28,
          borderBottom: "7px solid #873e32",
          borderRadius: "50%",
        }} />
      </div>

      {/* Badan */}
      <div style={{
        position: "absolute",
        top: 325,
        left: 25,
        width: 380,
        height: 300,
        borderRadius: "45% 45% 10% 10%",
        background: "#a044a6",
      }} />

      {/* Ponsel */}
      <div style={{
        position: "absolute",
        top: 230,
        left: lookingAtScreen ? 300 : -90,
        width: 145,
        height: 245,
        borderRadius: 25,
        background: "#171c2a",
        border: "8px solid #444b5c",
        transform: "rotate(-12deg)",
        boxShadow: "0 10px 30px #0008",
      }}>
        <div style={{
          position: "absolute",
          inset: 12,
          borderRadius: 12,
          background: "#273d64",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 23,
        }}>
          {lookingAtScreen ? "👀" : "📷"}
        </div>
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(145deg,#101936,#35206b)",
      fontFamily: "Arial",
      overflow: "hidden",
    }}>

      {/* ADEGAN 1 */}
      <AbsoluteFill style={{ opacity: scene1 }}>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 180,
          width: "100%",
          fontSize: 48,
        }}>
          PERNAH BIKIN VIDEO SELFIE?
        </div>
        {character(false)}
        <div style={{
          ...textStyle,
          position: "absolute",
          bottom: 210,
          width: "100%",
          fontSize: 39,
        }}>
          Tatapan terlihat kurang fokus?
        </div>
      </AbsoluteFill>

      {/* ADEGAN 2 */}
      <AbsoluteFill style={{ opacity: scene2 }}>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 180,
          width: "100%",
          fontSize: 48,
        }}>
          JANGAN TATAP LENSA!
        </div>
        {character(false)}
        <div style={{
          position: "absolute",
          top: 800,
          left: 140,
          fontSize: 100,
        }}>
          ⬇️
        </div>
        <div style={{
          ...textStyle,
          position: "absolute",
          bottom: 200,
          width: "100%",
          fontSize: 38,
        }}>
          Coba arahkan pandanganmu!
        </div>
      </AbsoluteFill>

      {/* ADEGAN 3 */}
      <AbsoluteFill style={{ opacity: scene3 }}>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 180,
          width: "100%",
          fontSize: 48,
        }}>
          TATAP MATAMU SENDIRI
        </div>
        {character(true)}
        <div style={{
          ...textStyle,
          position: "absolute",
          bottom: 190,
          width: "100%",
          fontSize: 38,
        }}>
          Lihat matamu di layar iPhone!
        </div>
      </AbsoluteFill>

      {/* ADEGAN 4 */}
      <AbsoluteFill style={{ opacity: scene4 }}>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 180,
          width: "100%",
          fontSize: 48,
        }}>
          LIHAT PERBEDAANNYA!
        </div>
        <div style={{
          position: "absolute",
          top: 500,
          left: 70,
          width: 420,
          height: 480,
          borderRadius: 30,
          background: "#a94c4c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          fontSize: 38,
          fontWeight: "bold",
        }}>
          <div style={{ fontSize: 100 }}>😕</div>
          KE LENSA
          <div style={{ fontSize: 25 }}>Kurang natural</div>
        </div>
        <div style={{
          position: "absolute",
          top: 500,
          right: 70,
          width: 420,
          height: 480,
          borderRadius: 30,
          background: "#258d72",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          fontSize: 38,
          fontWeight: "bold",
        }}>
          <div style={{ fontSize: 100 }}>😊</div>
          KE MATA
          <div style={{ fontSize: 25 }}>Lebih natural</div>
        </div>
      </AbsoluteFill>

      {/* ADEGAN 5 */}
      <AbsoluteFill style={{ opacity: scene5 }}>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 420,
          width: "100%",
          fontSize: 65,
        }}>
          👍
        </div>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 600,
          width: "100%",
          fontSize: 55,
        }}>
          INGAT!
        </div>
        <div style={{
          ...textStyle,
          position: "absolute",
          top: 730,
          width: "100%",
          fontSize: 54,
          lineHeight: 1.4,
        }}>
          TATAP MATAMU,
          <br />
          BUKAN KAMERAMU!
        </div>
        <div style={{
          ...textStyle,
          position: "absolute",
          bottom: 260,
          width: "100%",
          fontSize: 32,
        }}>
          Follow untuk tips berikutnya!
        </div>
      </AbsoluteFill>

    </AbsoluteFill>
  );
};
