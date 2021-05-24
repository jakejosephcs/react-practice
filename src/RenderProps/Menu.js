import React from 'react';

import Toggler from './Toggler';

function Menu() {
  return (
    <Toggler
      render={(on, toggle) => (
        <div>
          <button onClick={toggle}>{on ? 'Hide' : 'Show'} Menu</button>
          <div style={{ display: on ? 'block' : 'none' }}>
            <p>Content</p>
            <p>Of</p>
            <p>Container</p>
          </div>
        </div>
      )}
    />
  );
}

export default Menu;
