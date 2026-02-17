interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
