interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  const base =
    "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:opacity-90"
      : "bg-card border border-border text-text hover:bg-border";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
