import React, { useState } from 'react';

function Toggler(props) {
  console.log(props.defaultOn);
  const [on, setOn] = useState(props.defaultOn);

  const toggle = () => {
    setOn(prevState => !prevState);
  };

  return <div>{props.render(on, toggle)}</div>;
}

export default Toggler;
