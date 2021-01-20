import React from 'react';
import {AddUser} from '../';

// material UI
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';



const UsersHeader = props => {
  return(
    <React.Fragment>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Users {50}
        </Typography>
      </Grid>
      <Grid item xs={6} >
        <AddUser />
      </Grid>
    </React.Fragment>
  );
};

export default UsersHeader;
