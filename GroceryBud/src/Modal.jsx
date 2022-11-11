import React from "react";

const Modal = ({ open, onClose, mode }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer">
        <div className="modalRight">
          {/* Mode 1: Adding of item */}
          {mode == 1 && (
            <div className="content">
              <h1>Item successfully added</h1>
            </div>
          )}
          {/* Mode 2: Deletion of item */}
          {mode == 2 && (
            <div className="content">
              <h1>Item successfully removed</h1>
            </div>
          )}
          {/* Mode 3: Empty Input */}
          {mode == 3 && (
            <div className="content">
              <h1>Input is needed</h1>
            </div>
          )}
          {/* Mode 4: Clearing of items */}
          {mode == 4 && (
            <div className="content">
              <h1>Items successfully cleared</h1>
            </div>
          )}
          {/* Mode 5: Editing of items */}
          {mode == 5 && (
            <div className="content">
              <h1>Editing successful</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
