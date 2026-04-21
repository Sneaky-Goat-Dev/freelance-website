export default function ArrowIcon({ className = 'btn-arrow' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
