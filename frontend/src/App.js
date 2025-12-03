import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import FilterTabs from './components/FilterTabs';
import EventGrid from './components/EventGrid';
import ImageModal from './components/ImageModal';
import { fetchEvents } from './services/api';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, [selectedCategory]);

  const loadEvents = async () => {
    setLoading(true);
    try {
      const data = await fetchEvents(selectedCategory);
      console.log('Fetched events:', data); // Add this line
      setEvents(data);
    } catch (error) {
      console.error('Failed to load events:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Hero />
      <FilterTabs 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {loading ? (
        <div className="loading">Loading events...</div>
      ) : (
        <EventGrid 
          events={events}
          onImageClick={setSelectedImage}
        />
      )}
      <ImageModal 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;