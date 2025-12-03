import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api` || 'http://localhost:1337/api';
// const API_BASE_URL = 'http://localhost:1337/api';

export const fetchEvents = async (category = null) => {
  try {
    let url = `${API_BASE_URL}/events?populate=*`;
    
    if (category && category !== 'All') {
      url += `&filters[category][$eq]=${category}`;
    }
    
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const getImageUrl = (image) => {
  if (!image) return null;
  return `http://localhost:1337${image.url}`;
};