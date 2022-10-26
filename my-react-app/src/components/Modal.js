import './Modal.css'
import ReactDOM from 'react';

export default function Modal( {children, handleClose} ) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: "#FF4500",
          textAlign: "center"
        }}>
            {children}
            <button onClick={handleClose} >close</button>
        </div>
    </div>
  ), document.body)
}
