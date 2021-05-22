import React from 'react';
import withToggler from './HOCs/withToggler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

class Favorite extends React.Component {
  render() {
    return (
      <div>
        {this.props.on ? (
          <FontAwesomeIcon
            className='fa-2x'
            icon={faHeart}
            onClick={this.props.toggle}
          />
        ) : (
          <FontAwesomeIcon
            style={{ color: 'red' }}
            className='fa-2x'
            icon={faHeartbeat}
            onClick={this.props.toggle}
          />
        )}
      </div>
    );
  }
}

export default withToggler(Favorite);
