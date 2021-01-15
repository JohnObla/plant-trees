import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EcoIcon from '@material-ui/icons/Eco';
import { Eco } from '@material-ui/icons';
import Link from '../../Link';

const useStyles = makeStyles(theme => ({
  logo: {
    marginRight: 'auto',
  },
  menuButton: {
    marginLeft: 'auto',
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <MuiAppBar position="static" component="nav" href="">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.logo}
          color="inherit"
          aria-label="menu"
          component={Link}
          href="/"
        >
          <EcoIcon />
        </IconButton>

        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}
