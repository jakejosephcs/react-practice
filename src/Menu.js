import React from 'react';

class Menu extends React.Component {
  state = {
    showMenu: true,
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleMenu}>
          {this.state.showMenu ? 'Hide' : 'Show'} Menu
        </button>
        <div style={{ display: this.state.showMenu ? 'block' : 'none' }}>
          <p>Content</p>
          <p>Of</p>
          <p>Container</p>
        </div>
      </div>
    );
  }
}

export default Menu;
