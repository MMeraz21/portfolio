interface BadgeProps {
    children: React.ReactNode
    className?: string
  }
  
  export function Badge({ children, className = "" }: BadgeProps) {
    return (
      <span className={`inline-flex items-center px-4 py-1 rounded-full bg-[#3B5B43] text-[#161616] text-md ${className}`}>
        {children}
      </span>
    )
  }