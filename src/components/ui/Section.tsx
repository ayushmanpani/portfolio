import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = ({ children, className = "", ...props }: SectionProps) => {
  return (
    <section
      className={`py-20 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
