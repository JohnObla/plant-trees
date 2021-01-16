import React from 'react';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import HeroImage from '../src/components/HeroImage';
import Card from '@material-ui/core/Card';
import CardContent from '../src/components/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  subtext: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },

  listItem: {
    marginLeft: 'auto',
  },

  icon: {
    blue: {
      color: 'blue',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Box>
      <HeroImage />

      <Box
        className={classes.subtext}
        px={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        py={{ xs: 2, sm: 3, md: 4 }}
      >
        <Typography>
          Over 20 billion trees have been cut down in aid of tree spaces and we
          need your help now more than ever. Please help us restore them ❤️
        </Typography>
      </Box>

      <Box px={{ xs: 3, sm: 4, md: 5, lg: 6 }} py={{ xs: 2, sm: 3 }}>
        <Typography className={classes.smallBrand} variant="h5">
          Plant Trees...
        </Typography>

        <List className={classes.list} aria-label="secondary mailbox folders">
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Icon className="fas fa-tree " color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Planted 200 million trees worldwide."
              //   primaryTypographyProps={{ align: 'center' }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon className="fas fa-hands-helping" color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Helped 300 thousand people connect with nature"
              //   primaryTypographyProps={{ align: 'center' }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon className="fas fa-cog" />
            </ListItemIcon>
            <ListItemText
              primary="Increased 250% of tree building efficiency"
              //   primaryTypographyProps={{ align: 'center' }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon
                className={classNames('fas fa-ban', `${classes.icon.blue}`)}
              />
            </ListItemIcon>
            <ListItemText
              primary="Prevented 50 companies from ilegally axing trees"
              //   primaryTypographyProps={{ align: 'center' }}
            />
          </ListItem>
        </List>
      </Box>

      <Box px="2"></Box>
      <ProTip />
      <Copyright />
    </Box>
  );
}
