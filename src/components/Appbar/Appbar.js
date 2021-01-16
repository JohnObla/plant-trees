import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EcoIcon from '@material-ui/icons/Eco';
import Link from '../../Link';
import LogoLink from '../LogoLink';
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
  logo: {
    marginRight: 'auto',
  },
  ctaButton: {
    margin: 'auto',
  },
  menuButton: {
    marginLeft: 'auto',
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <MuiAppBar position="sticky" component="nav" href="">
      <Toolbar>
        <LogoLink color="inherit" className={classes.logo} />

        <Button
          className={classes.ctaButton}
          variant="contained"
          color="secondary"
          component={Link}
          naked
          href="/about"
        >
          Donate Now
        </Button>

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
