import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Alert1=() => {
  const [show, setShow] = useState(true);

  
  const hideAlert = () => setShow(false);
  return (
    <>
      <Alert show={show} variant="success" >
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={hideAlert} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

export default Alert1;