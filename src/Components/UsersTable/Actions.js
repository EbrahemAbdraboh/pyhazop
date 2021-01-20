import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';


// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
  },

}));

export default function Actions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


        <IconButton color="default" aria-label="upload picture" component="span">
          <EditIcon />
        </IconButton>

        <IconButton color="default" aria-label="upload picture" component="span">
          <DeleteIcon />
        </IconButton>

    </div>
  );
}
