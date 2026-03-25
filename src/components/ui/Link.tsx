type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ to, children, className }: Props) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}