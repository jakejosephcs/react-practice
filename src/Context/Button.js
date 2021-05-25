import { getByTitle } from '@testing-library/dom';
import React from 'react';

export default function Button() {
  const themeStyles = {
    backgroundColor: 'brown',
  };

  return (
    <div>
      <button style={themeStyles}>Switch Theme</button>
    </div>
  );
}
