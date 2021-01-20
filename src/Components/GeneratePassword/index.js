import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';



import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    width: '100%',
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '100%',
  },
}));

export default function GenPassword() {
  const classes = useStyles();

  return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type='password'
      
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <AutorenewIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
