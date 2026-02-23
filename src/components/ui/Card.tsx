interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        bg-surface
        border border-border
        rounded-xl
        p-6
        shadow-sm
        transition-all duration-300
        hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
