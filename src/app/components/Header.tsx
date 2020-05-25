import React from 'react';
import logo from '@static/logo.png';

const Header: React.FC = () => {
  return (
    <div>
      <h2>
        <img src={logo} width='32' title='Codesbiome' /> &nbsp; Electron React
        Webpack Typescript - 2020
      </h2>
      <p>
        Minimal boilerplate for writing Desktop Applications using Electron,
        React, Webpack & TypeScript. This project makes use of latest packages
        like electron, react, typescript & webpack to serve the best environment
        for development.
      </p>
    </div>
  );
};

export default Header;
