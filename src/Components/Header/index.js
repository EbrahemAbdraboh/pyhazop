import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


// log out button
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  branding: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    lineHeight: '50px',
    padding: 0,
    width:'200px'
  },
  flexSpacer:{
    flex: 1,
  },
  logo: {
    margin: 'auto',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100px'
    }
  }
}));

const Header = props => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


// log out action
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (


    <AppBar
      position="fixed"
      className={props.headerclassName}

    >
      <Toolbar>
        <IconButton
          color="secondary"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={props.iconClassName}

        >
          <MenuIcon />
        </IconButton>
        <span className={classes.flexSpacer} />

        <div className={classes.branding}>
          <img
            src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
            alt="Kagera | PyHAZOP"
            className={classes.logo}
          />
        </div>


        <span className={classes.flexSpacer} />
        <div>
          <Button
            className={classes.button}
            startIcon={<ExitToAppIcon />}
            onClick={handleClickOpen}
            style={{'color': '#fff'}}
            >
            Logout
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{"LOGOUT"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure that you want to logout ?
              </DialogContentText>
            </DialogContent>
            <Divider />
            <DialogActions>
              <Button onClick={handleClose} size="small" color="default" className={classes.button}>
                Cancel
              </Button>
              <Link to="/login" >
                <Button  size="small" color="primary" className={classes.button}>
                  Logout
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </div>


      </Toolbar>
    </AppBar>


  );
};

export default Header;
