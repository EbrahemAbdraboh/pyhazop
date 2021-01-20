import React from 'react';
import { Header, Sidebar } from '../../Components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";
import { Home, Users, Projects, Reports, DataConfig } from "../";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Header
          handleDrawerOpen={handleDrawerOpen}
          headerclassName={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          iconClassName={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
          />
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          sidebarclassName={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          sidebarclasses={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          />
        <main className={classes.content}>
          <div className={classes.toolbar} />

            <Switch>
              <Route  exact path="/Admin/Users" component={Users} />
              <Route  exact path="/Admin/Projects" component={Projects} />
              <Route  exact path="/Admin/Reports" component={Reports} />
              <Route  exact path="/Admin/DataConfiguration" component={DataConfig} />
              <Route  exact path="/Admin" component={Home} />
            </Switch>

        </main>
      </div>
    </React.Fragment>

  );
}
export default Dashboard;
