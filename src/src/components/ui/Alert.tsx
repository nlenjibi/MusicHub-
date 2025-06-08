
import type { ReactNode } from 'react'

interface AlertProps {
  // Define any props if needed
  children: ReactNode;
  onClose?: () => void; // Optional close handler
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className='alert alert-primary alert-dismissible'>{children}
    <button type='button' className='btn-close'  data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button></div>
  )
}

export default Alert