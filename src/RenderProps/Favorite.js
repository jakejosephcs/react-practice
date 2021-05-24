import React from 'react';
import Toggler from './Toggler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

function Favorite() {
  return (
    <>
      <Toggler
        render={(on, toggle) => (
          <div>
            {on ? (
              <FontAwesomeIcon
                className='fa-2x'
                icon={faHeart}
                onClick={toggle}
              />
            ) : (
              <FontAwesomeIcon
                style={{ color: 'red' }}
                className='fa-2x'
                icon={faHeartbeat}
                onClick={toggle}
              />
            )}
          </div>
        )}
      />
    </>
  );
}

export default Favorite;
