import React from 'react';
import {
  Link,
  Outlet
} from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px", width: "100px", background: "#f0f0f0" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/editdata">EditData</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  }
}

export default Menu;
