export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`logo-symbol ${className}`.trim()}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="logo-orbit"
        d="M7.5 27.6C5.9 18.5 13.2 9.7 23.8 8.1c10.7-1.7 19.4 4.5 20.7 13.4 1.3 9-5.4 17.2-15.6 19.4C18.7 43 9.1 37.8 7.5 27.6Z"
      />
      <path className="logo-links" d="m10.2 30.6 13.8-7.7 12.4-11.1M24 22.9l15.5 9.3" />
      <circle className="logo-node" cx="10.2" cy="30.6" r="2.15" />
      <circle className="logo-node" cx="36.4" cy="11.8" r="2.15" />
      <circle className="logo-node" cx="39.5" cy="32.2" r="2.15" />
      <path
        className="logo-star"
        d="M24 10.4c.7 7.5 3.6 10.8 11.1 12.5C27.6 24.6 24.7 28 24 35.5 23.3 28 20.4 24.6 12.9 23c7.5-1.7 10.4-5 11.1-12.5Z"
      />
      <circle className="logo-heart" cx="24" cy="22.9" r="1.6" />
    </svg>
  );
}
