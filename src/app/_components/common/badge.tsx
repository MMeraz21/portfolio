interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[#c6ddce] px-3 py-1 text-sm font-medium text-[#2a4433] ${className}`}
    >
      {children}
    </span>
  );
}
