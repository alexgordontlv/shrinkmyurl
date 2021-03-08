import React from "react";
import "./header.styles.css";
import Search from "../search/Search";
import {
  Tabs,
  Tab,
  Menu,
  MenuItem,
  makeStyles,
  Avatar,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    height: "55px",
  },
  menu: {
    "& div": {
      // this is just an example, you can use vw, etc.
      width: "200px",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__left">
        <div>LOGO</div>
      </div>
      <div className="header__center">
        <div>
          <Search />
        </div>

        <Tabs
          className={classes.root}
          centered
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab label="RECENTS" />
          <Tab label="FAVORITES" />
          <Tab label="NEARBY" />
        </Tabs>
      </div>
      <div className="header__right">
        <Avatar
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Avatar>
        <Menu
          className={classes.menu}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Admin</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
