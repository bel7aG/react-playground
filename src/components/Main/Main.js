import React from 'react';

const Main = ({ children, className, onMouseOverMain, onMouseOutMain }) => (
  <main
    className={className}
    onMouseOver={onMouseOverMain}
    onMouseOut={onMouseOutMain}
  >
    { children }
  </main>
);

export default Main;
