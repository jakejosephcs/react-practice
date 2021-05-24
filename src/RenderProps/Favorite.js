import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

function Favorite() {
  return (
    <div>
      <FontAwesomeIcon className='fa-2x' icon={faHeart} />

      <FontAwesomeIcon
        style={{ color: 'red' }}
        className='fa-2x'
        icon={faHeartbeat}
      />
    </div>
  );
}

export default Favorite;
