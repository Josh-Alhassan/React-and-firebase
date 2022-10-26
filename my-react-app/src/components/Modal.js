import './Modal.css'
import ReactDOM from 'react-dom';

export default function Modal( {children, handleClose, isSaleModal} ) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: isSaleModal ? "#FF4500" : "#555",
          textAlign: "center"
        }}>
            {children}
            <button
              onClick={handleClose}
              className={isSaleModal ? "sales-btn" : ""}
            >close</button>
        </div>
    </div>
  ), document.body)
}
