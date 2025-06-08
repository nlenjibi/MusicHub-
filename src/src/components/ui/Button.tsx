
import type { ButtonHTMLAttributes, ReactNode } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'btn-danger',
};

const sizeClasses = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

const Button= ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,  
  ...props
}: ButtonProps) => (
  <button
    className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
/*
Usage example:


function App() {
  return (
    <div>
      <Button variant="primary" size="md">Primary</Button>
      <Button variant="secondary" size="sm">Secondary</Button>
      <Button variant="danger" size="lg" disabled>Danger</Button>
    </div>
  );
}
*/