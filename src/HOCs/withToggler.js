import React from 'react';

class Toggler extends React.Component {
  state = {
    on: true,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !this.state.on,
      };
    });
  };
  render() {
    const C = this.props.component;
    return <C on={this.state.on} toggle={this.toggle} />;
  }
}

export default function (component) {
  return function (props) {
    return <Toggler component={component} {...props} />;
  };
}
