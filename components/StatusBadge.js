export default function StatusBadge({ label, tone = "signal" }) {
  const toneMap = {
    signal: "bg-signal shadow-[0_0_8px_2px_rgba(79,209,197,0.6)]",
    amber: "bg-amber shadow-[0_0_8px_2px_rgba(240,180,41,0.6)]",
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
      <span className={`relative flex h-2 w-2`}>
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${toneMap[tone]} animate-pulseSoft`}
        />
      </span>
      {label}
    </div>
  );
}
