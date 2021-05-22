import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

class Favorite extends React.Component {
  state = {
    solidHeart: true,
  };

  toggleSolidHeart = () => {
    this.setState(prevState => {
      return {
        solidHeart: !prevState.solidHeart,
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.solidHeart ? (
          <FontAwesomeIcon
            className='fa-2x'
            icon={faHeart}
            onClick={this.toggleSolidHeart}
          />
        ) : (
          <FontAwesomeIcon
            style={{ color: 'red' }}
            className='fa-2x'
            icon={faHeartbeat}
            onClick={this.toggleSolidHeart}
          />
        )}
      </div>
    );
  }
}

export default Favorite;
