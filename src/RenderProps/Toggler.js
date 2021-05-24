import React, { useState } from 'react';

function Toggler(props) {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(prevState => !prevState);
  };

  return <div>{props.render(on, toggle)}</div>;
}

export default Toggler;
