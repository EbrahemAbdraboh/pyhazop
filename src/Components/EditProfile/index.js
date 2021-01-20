import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GenPassword from '../GeneratePassword';

// Edit Profile  button
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

import PhoneIcon from '@material-ui/icons/Phone';

import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const EditProfile = props => {

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
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
        color="default"
        size="small"
        >
        Edit Profile
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{"Edit Profile"}</DialogTitle>
        <DialogContent>
          <FormControl className={classes.margin}>

            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <GenPassword />
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <PhoneIcon />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Phone" />
                </Grid>
              </Grid>
            </div>
          </FormControl>


          <DialogActions>
            <Button onClick={handleClose} size="small" color="default" className={classes.button}>
              Cancel
            </Button>

            <Button  onClick={handleClose} size="small" color="primary" className={classes.button}>
              Save
            </Button>

          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>

  );
};

export default EditProfile;
