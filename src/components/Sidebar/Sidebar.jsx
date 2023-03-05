import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';
const categories = [
  {
    label: 'Popular',
    value: 'popular',
    label: 'Top Rated',
    value: 'top_rated',
    label: 'Upcoming',
    value: 'upcoming',
  },
];
const demos = [
  {
    label: 'Comedy',
    value: 'comedy',
    label: 'Action',
    value: 'action',
    label: 'Horror',
    value: 'horror',
    label: 'Animation',
    value: 'animation',
  },
];

const redLogo = `https://upload.wikimedia.org/wikipedia/commons/9/9d/REDLogo.jpg`;
const blueLogo = `https://cdn.logojoy.com/wp-content/uploads/2018/08/23141702/3_big1.png`;

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className="classes.imageLink">
        <img
          className={classes.image}
          alt="Cine-verse Logo"
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
        />
      </Link>

      <Divider />
      <List>
        <ListSubheader> Categories</ListSubheader>
        {demos.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  src={redLogo}
                  alt=""
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;

// import React, { useEffect } from 'react';
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   ListSubheader,
//   ListItemIcon,
//   Box,
//   CircularProgress,
// } from '@mui/material';
