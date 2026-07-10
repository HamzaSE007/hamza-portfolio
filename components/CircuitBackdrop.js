export default function CircuitBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <svg
        className="absolute -top-24 right-[-10%] h-[600px] w-[600px] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="199" className="trace-line" />
        <circle cx="200" cy="200" r="140" className="trace-line" />
        <circle cx="200" cy="200" r="80" className="trace-line" />
        <line x1="0" y1="200" x2="400" y2="200" className="trace-line" />
        <line x1="200" y1="0" x2="200" y2="400" className="trace-line" />
        <circle cx="200" cy="60" r="3" fill="#4FD1C5" className="animate-pulseSoft" />
        <circle cx="340" cy="200" r="3" fill="#F0B429" className="animate-pulseSoft" />
      </svg>
    </div>
  );
}
