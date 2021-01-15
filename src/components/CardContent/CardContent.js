import React from 'react';
import MuiCardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const CardContent = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiCardContent
      className={classes.root}
      children={children}
      {...props}
    ></MuiCardContent>
  );
};

export default CardContent;
