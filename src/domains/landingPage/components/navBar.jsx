import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav
    style={{
      borderBottom: 'solid 1px',
    }}
  >
    <ul>
      <li style={{ display: 'inline', padding: 5 }}>
        <Link to="/">Home</Link>
      </li>
      <li
        style={{
          display: 'inline',
          padding: 5,
          borderLeft: '1px solid black',
        }}
      >
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);
