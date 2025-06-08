
//import Button from 'react-bootstrap/Button';
import { ToastContainer } from 'react-bootstrap';

import Toast from 'react-bootstrap/Toast';


interface CustomProps {
  toast: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;

}
const CustomToast = ({ toast, onClose, title, children }: CustomProps) => {
  return (
      <ToastContainer className="p-3" position="top-end">
        <Toast show={toast} onClose={onClose}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title || "Bootstrap"}</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </ToastContainer>
  );
}
export default CustomToast;

/** const {toast, showToast, hideToast } = useToast();
      <Button variant="primary" onClick={showToast}>
        Open
      </Button>
       <Toast toast={toast} onClose={hideToast}  title="Confirm Action">
         are u sure
        </Toast> */