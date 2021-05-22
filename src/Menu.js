import React from 'react';
import withToggler from './HOCs/withToggler';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? 'Hide' : 'Show'} Menu
        </button>
        <div style={{ display: this.props.on ? 'block' : 'none' }}>
          <p>Content</p>
          <p>Of</p>
          <p>Container</p>
        </div>
      </div>
    );
  }
}

export default withToggler(Menu, { defaultOn: false });
