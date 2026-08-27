/**
 * Deterministic, seeded placeholder artwork used until real build screenshots
 * are dropped in. Swap usages of <PlaceholderScene /> for a real <Image />
 * once you have renders — see README notes in each card component.
 */
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type PlaceholderSceneProps = {
  seed: number;
  className?: string;
};

export default function PlaceholderScene({
  seed,
  className,
}: PlaceholderSceneProps) {
  const rand = mulberry32(seed * 9301 + 49297);
  const hue = 255 + Math.floor(rand() * 40 - 20);

  const buildings = Array.from({ length: 11 }, (_, i) => {
    const x = i * (400 / 11);
    const w = 400 / 11 - Math.floor(rand() * 4);
    const h = 40 + rand() * 120;
    const isTower = rand() > 0.75;
    return { x, w, h, isTower, y: 220 - h };
  });

  const stars = Array.from({ length: 18 }, (_, i) => ({
    cx: rand() * 400,
    cy: rand() * 110,
    r: 0.6 + rand() * 1.2,
    delay: (rand() * 3).toFixed(2),
  }));

  const gradId = `sky-${seed}`;
  const fogId = `fog-${seed}`;
  const glowId = `glow-${seed}`;

  return (
    <div className={className}>
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`hsl(${hue}, 55%, 10%)`} />
            <stop offset="55%" stopColor={`hsl(${hue - 10}, 45%, 7%)`} />
            <stop offset="100%" stopColor="#050308" />
          </linearGradient>
          <radialGradient id={glowId} cx="50%" cy="15%" r="45%">
            <stop offset="0%" stopColor="hsl(262, 90%, 70%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(262, 90%, 70%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={fogId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill={`url(#${gradId})`} />
        <rect width="400" height="300" fill={`url(#${glowId})`} />

        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="white"
            opacity="0.7"
            className="animate-twinkle"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}

        <circle cx="320" cy="55" r="22" fill="hsl(262, 85%, 88%)" opacity="0.9" />
        <circle cx="320" cy="55" r="38" fill="hsl(262, 85%, 78%)" opacity="0.12" />

        <g opacity="0.9">
          {buildings.map((b, i) => (
            <g key={i}>
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                fill={`hsl(${hue - 15}, 35%, ${6 + (i % 3)}%)`}
              />
              {b.isTower && (
                <polygon
                  points={`${b.x - 1},${b.y} ${b.x + b.w / 2},${b.y - 16} ${
                    b.x + b.w + 1
                  },${b.y}`}
                  fill={`hsl(${hue - 15}, 35%, 6%)`}
                />
              )}
              {b.isTower && (
                <rect
                  x={b.x + b.w / 2 - 0.75}
                  y={b.y - 8}
                  width="1.5"
                  height="8"
                  fill="#c4b5fd"
                  opacity="0.6"
                />
              )}
            </g>
          ))}
        </g>

        <rect x="0" y="150" width="400" height="150" fill={`url(#${fogId})`} />
      </svg>
    </div>
  );
}
