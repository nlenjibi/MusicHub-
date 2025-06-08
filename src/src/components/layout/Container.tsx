import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <main className={`container my-4 ${className}`}>
      {children}
    </main>
  );
};

export default Container;
