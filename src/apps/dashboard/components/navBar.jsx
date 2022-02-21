import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
      }}
    >
      <ul>
        <li style={{ display: 'inline', padding: 5 }}>
          <Link to="/admin">Home Dashboard</Link>
        </li>
        <li
          style={{
            display: 'inline',
            padding: 5,
            borderLeft: '1px solid black',
          }}
        >
          <Link to="/admin/info">Info</Link>
        </li>
        <li
          style={{
            display: 'inline',
            padding: 5,
            borderLeft: '1px solid black',
          }}
        >
          {/* using default 'a' to jump to another app route */}
          <a href="/">LP</a>
        </li>
      </ul>
    </nav>
  );
}
