import React from 'react';
import EventCard from './EventCard';
import './EventGrid.css';

const EventGrid = ({ events, onImageClick }) => {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <EventCard 
          key={event.id} 
          event={event} 
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default EventGrid;