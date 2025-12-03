import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onImageClick }) => {
  const { title, date, images } = event;
  const mainImage = images?.[0];
  console.log('Image URL:', mainImage.url);
  
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="event-card" onClick={() => onImageClick(mainImage)}>
      {mainImage && (
        <img 
          src={`${process.env.REACT_APP_API_URL}${mainImage.url}`}
          alt={title}
          className="event-image"
        />
      )}
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default EventCard;