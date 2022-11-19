import React from 'react';
import {
  Link,
  Outlet
} from "react-router-dom";
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from "@mui/material";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.theme = createTheme({
      palette: {
        primary: {
          main: '#8879B0',
        },
        secondary: {
          main: '#FBA1A1',
        },
      },
    });
  }


  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px" }}>
            <Paper sx={{ width: 120, maxWidth: '100%' }}>
              <MenuList>
                <Link to="/">
                  <MenuItem>
                    <ListItemText>Dashboard</ListItemText>
                  </MenuItem>
                </Link>
                <Divider />
                <Link to="/editdata">
                  <MenuItem>
                    <ListItemText>Edit Data</ListItemText>
                  </MenuItem>
                </Link>
              </MenuList>
            </Paper>
          </div>
          <Outlet />
        </div>
      </ThemeProvider>
    )
  }
}

export default Menu;
