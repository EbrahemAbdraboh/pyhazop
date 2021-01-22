import React from 'react';


// material UI
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';



const PageHeader = props => {
  return(
    <React.Fragment>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={6} >
        {props.children}
      </Grid>
    </React.Fragment>
  );
};

export default PageHeader;
