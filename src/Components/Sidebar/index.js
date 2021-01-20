import React from 'react';

import {EditProfile} from '../';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';




import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';



import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';



// Icons
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PersonIcon from '@material-ui/icons/Person';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import StorageIcon from '@material-ui/icons/Storage';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  profile:{
    margin: '16px',
    marginLeft: '15px',
  },
  profileData: {
    marginTop: '15px',

  },
  profileName:{
    color: '#00abc0',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
}));

const Sidebar = props => {
  const classes = useStyles();

  return (
      <Drawer
        variant="permanent"
        className={props.sidebarclassName}
        classes={props.sidebarclasses}

      >
        <div className={classes.toolbar}>
          <IconButton onClick={props.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.root}>
          <Avatar className={classes.profile}>
            <PersonIcon />
          </Avatar>
          <ListItemText
            className={classes.profileData}
            primary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.profileName}
                >
                  Manja Bogicevic
                </Typography>
              </React.Fragment>
            }
            secondary={<EditProfile />} />

        </div>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <Link to="/Admin" >
            <ListItem button >
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to="/Admin/Users" >
            <ListItem button >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          <Link to="/Admin/Projects" >
            <ListItem button >
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
          </Link>
          <Link to="/Admin/Reports" >
            <ListItem button >
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
          </Link>
          <Link to="/Admin/DataConfiguration" >
            <ListItem button >
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Data Configuration" />
            </ListItem>
          </Link>
        </List>

      </Drawer>

  );
}
export default Sidebar;
