type ContainerProps = {
  children: React.ReactNode;
  size?: "default" | "wide" | "narrow" | "full";
  className?: string;
};

export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div
      className={`
        w-full mx-auto px-4 my-6
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}