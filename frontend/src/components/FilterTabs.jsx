import React from 'react';
import './FilterTabs.css';
import { CATEGORIES } from '../utils/constants';

const FilterTabs = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-tabs">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;