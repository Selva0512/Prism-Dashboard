import { useState } from "react";

// const videoThumbs = [
//   { id: 1, large: true, label: "Driver Side" },
//   { id: 2, large: true, label: "Rear Quarter" },
//   { id: 3, label: "Front" },
//   { id: 4, label: "Rear" },
//   { id: 5, label: "Top" },
//   { id: 6, label: "Side" },
//   { id: 7, label: "Wheel" },
//   { id: 8, label: "Bed" },
// ];

const photoGrid = [
  { id: 1, label: "Top Left" },
  { id: 2, label: "Top Right" },
  { id: 3, label: "Mid Left" },
  { id: 4, label: "Mid Right" },
  { id: 5, label: "Bot Left" },
  { id: 6, label: "Bot Right" },
];

const damageRows = [
  { label: "Passenger", icon: "🚗" },
  { label: "Front", icon: "🚗" },
  { label: "Rear", icon: "🚗" },
];

// Truck silhouette SVG paths (simplified)
const TruckSideIcon = () => (
  <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
    <rect x="1" y="6" width="26" height="9" rx="1" stroke="#888" strokeWidth="1" fill="none"/>
    <rect x="18" y="3" width="9" height="6" rx="1" stroke="#888" strokeWidth="1" fill="none"/>
    <circle cx="7" cy="15" r="2.5" stroke="#888" strokeWidth="1" fill="none"/>
    <circle cx="26" cy="15" r="2.5" stroke="#888" strokeWidth="1" fill="none"/>
  </svg>
);

const CarIcon = ({ size = 28 }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 40 20" fill="none">
    <rect x="2" y="8" width="32" height="9" rx="2" stroke="#aaa" strokeWidth="1.2" fill="none"/>
    <path d="M8 8 L12 3 H28 L34 8" stroke="#aaa" strokeWidth="1.2" fill="none"/>
    <circle cx="10" cy="17" r="2.5" stroke="#aaa" strokeWidth="1.2" fill="none"/>
    <circle cx="30" cy="17" r="2.5" stroke="#aaa" strokeWidth="1.2" fill="none"/>
  </svg>
);

const VideoCard = ({ large, label, index }) => {
  const colors = [
    "#1a1f1a", "#1c1a18", "#181c1c", "#1a1c1a",
    "#1c1c18", "#181818", "#1a1a1c", "#1c1a1c"
  ];
  const bg = colors[index % colors.length];

  return (
    <div style={{
      background: bg,
      borderRadius: 10,
      overflow: "hidden",
      position: "relative",
      aspectRatio: large ? "16/9" : "4/3",
      border: "1px solid #2a2a2a",
      cursor: "pointer",
      transition: "border-color 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "#e8450a"}
    onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}
    >
      {/* Simulated truck silhouette overlay */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: 0.08,
      }}>
        <div style={{ fontSize: large ? 80 : 48, color: "#aaa" }}>🚛</div>
      </div>

      {/* Noise texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 3px)",
        pointerEvents: "none",
      }}/>

      {/* Controls bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex", alignItems: "center", gap: 6,
        padding: large ? "5px 10px" : "3px 6px",
        fontSize: large ? 11 : 10,
        color: "#ccc",
      }}>
        <span style={{ cursor: "pointer", fontSize: large ? 13 : 11 }}>▶</span>
        <span style={{ fontFamily: "monospace", fontSize: large ? 10 : 9 }}>0:00 / 0:09</span>
        <span style={{ cursor: "pointer", fontSize: large ? 12 : 10 }}>🔇</span>
        <span style={{ marginLeft: "auto", cursor: "pointer" }}>⛶</span>
        <span style={{ cursor: "pointer", fontSize: 13, lineHeight: 1 }}>⋮</span>
      </div>

      {/* Corner label */}
      {large && (
        <div style={{
          position: "absolute", top: 8, left: 8,
          background: "rgba(0,0,0,0.5)",
          color: "#e8450a",
          fontSize: 9,
          padding: "2px 6px",
          borderRadius: 3,
          letterSpacing: "0.08em",
          fontWeight: 600,
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}>
          {label}
        </div>
      )}
    </div>
  );
};

const PhotoThumb = ({ index }) => {
  const shades = ["#1a1a1a", "#181c18", "#1c181c", "#181818", "#1c1c1c", "#1a181c"];
  return (
    <div style={{
      background: shades[index % shades.length],
      borderRadius: 6,
      aspectRatio: "4/3",
      border: "1px solid #2a2a2a",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      transition: "border-color 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "#e8450a"}
    onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}
    >
      <div style={{ opacity: 0.07, fontSize: 32 }}>🚛</div>
    </div>
  );
};

const DamageRow = ({ label, expanded, onToggle }) => (
  <div style={{
    borderBottom: "1px solid #222",
    padding: "10px 14px",
  }}>
    <div
      style={{
        display: "flex", alignItems: "center", gap: 10,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={onToggle}
    >
      <CarIcon size={36} />
      <span style={{
        flex: 1,
        color: "#ccc",
        fontSize: 13,
        fontWeight: 500,
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "0.02em",
      }}>
        {label}
      </span>
      <span style={{
        background: "#e8450a",
        color: "#fff",
        fontSize: 10,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 4,
        letterSpacing: "0.04em",
      }}>
        0 Damages
      </span>
      <span style={{
        color: "#888",
        fontSize: 11,
        padding: "2px 8px",
        border: "1px solid #333",
        borderRadius: 4,
        marginLeft: 4,
      }}>
        Frames
      </span>
      <span style={{ color: "#888", fontSize: 14, marginLeft: 4 }}>{expanded ? "∧" : "∨"}</span>
    </div>
    {expanded && (
      <div style={{
        marginTop: 10,
        color: "#555",
        fontSize: 12,
        fontStyle: "italic",
        paddingLeft: 46,
      }}>
        No damage detected on this panel.
      </div>
    )}
  </div>
);

export default function PrismInspection() {
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (label) =>
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <div style={{
      background: "#0e0e0e",
      minHeight: "100vh",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#ddd",
      padding: "16px 20px",
      boxSizing: "border-box",
    }}>
      {/* Top Bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 14,
        paddingBottom: 12,
        borderBottom: "1px solid #1e1e1e",
      }}>
        {/* VIN */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: "monospace",
            fontSize: 14,
            color: "#e0e0e0",
            letterSpacing: "0.06em",
            fontWeight: 600,
          }}>
            1C6SRFFT7TN349979
          </span>
          <CarIcon size={38} />
        </div>

        {/* Right meta */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Timestamp */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              border: "2px solid #e8450a",
              boxShadow: "0 0 6px #e8450a66",
            }}/>
            <span style={{ fontSize: 12, color: "#aaa", fontFamily: "monospace" }}>
              03/12/2026 23:53:05
            </span>
          </div>
          {/* Location */}
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ color: "#888", fontSize: 13 }}>📍</span>
            <span style={{ fontSize: 12, color: "#aaa", letterSpacing: "0.06em", fontWeight: 600 }}>
              NEW BOSTON
            </span>
          </div>
          {/* Pod */}
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ color: "#888", fontSize: 12 }}>🔌</span>
            <span style={{ fontSize: 12, color: "#aaa", letterSpacing: "0.04em" }}>POD 2</span>
          </div>
          <CarIcon size={36} />

          {/* Date + Prism brand */}
          <div style={{ textAlign: "right", lineHeight: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>13</span>
              <div>
                <div style={{ fontSize: 11, color: "#aaa", lineHeight: 1.2 }}>Mar 2026</div>
                <div style={{ fontSize: 11, color: "#aaa", lineHeight: 1.2 }}>Friday</div>
              </div>
              <span style={{
                fontWeight: 900,
                fontSize: 18,
                letterSpacing: "0.25em",
                color: "#e8450a",
                marginLeft: 6,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              }}>
                PRISM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16 }}>
        {/* Left: Video Grid */}
        <div>
          {/* Large videos row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
            <VideoCard large index={0} label="Driver Side" />
            <VideoCard large index={1} label="Rear Quarter" />
          </div>

          {/* Small videos row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
            {[2, 3, 4, 5].map(i => <VideoCard key={i} index={i} />)}
          </div>

          {/* Two small videos */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 8, marginBottom: 16 }}>
            {[6, 7].map(i => <VideoCard key={i} index={i} />)}
            <div/> {/* empty spacer */}
          </div>

          {/* Playback Controls */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "8px 0",
          }}>
            {/* Restart */}
            <button style={ctrlBtnStyle("#222")}>
              <span style={{ fontSize: 18 }}>↺</span>
            </button>

            {/* Center controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button style={ctrlBtnStyle("#222")}>
                <span style={{ fontSize: 16 }}>⏮</span>
              </button>
              <button
                style={ctrlBtnStyle("#e8450a", true)}
                onClick={() => setPlaying(!playing)}
              >
                <span style={{ fontSize: 18 }}>{playing ? "⏸" : "▶"}</span>
              </button>
              <button style={ctrlBtnStyle("#222")}>
                <span style={{ fontSize: 16 }}>⏭</span>
              </button>
            </div>

            {/* Download */}
            <button style={ctrlBtnStyle("#222")}>
              <span style={{ fontSize: 16 }}>⬇</span>
            </button>
          </div>
        </div>

        {/* Right: Photos + Damage */}
        <div>
          {/* Photo grid */}
          <div style={{
            background: "#111",
            borderRadius: 10,
            padding: 10,
            border: "1px solid #1e1e1e",
            marginBottom: 12,
          }}>
            {/* PDF button */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
              <button style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#e8450a", fontSize: 20,
                display: "flex", alignItems: "center", gap: 4,
              }}>
                📄
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {photoGrid.map((_, i) => <PhotoThumb key={i} index={i} />)}
            </div>
          </div>

          {/* Damage panels */}
          <div style={{
            background: "#111",
            borderRadius: 10,
            border: "1px solid #1e1e1e",
            overflow: "hidden",
          }}>
            {damageRows.map(row => (
              <DamageRow
                key={row.label}
                label={row.label}
                expanded={!!expanded[row.label]}
                onToggle={() => toggleExpand(row.label)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}

function ctrlBtnStyle(bg, accent = false) {
  return {
    width: 44, height: 44,
    borderRadius: "50%",
    background: bg,
    border: accent ? "none" : "1px solid #2a2a2a",
    color: accent ? "#fff" : "#ccc",
    cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "transform 0.15s, opacity 0.15s",
    boxShadow: accent ? "0 0 16px #e8450a55" : "none",
  };
}
