import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img 
          src={`http://localhost:1337${image.url}`}
          alt={image.name}
          className="modal-image"
        />
      </div>
    </div>
  );
};

export default ImageModal;