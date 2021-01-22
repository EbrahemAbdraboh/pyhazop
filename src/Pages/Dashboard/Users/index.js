import React from 'react';
import { PageHeader, UsersTable, Wrapper, AddUser } from '../../../Components';

// material UI
import Grid from "@material-ui/core/Grid";



class Users extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      something: 0,
    }
  }
  render(){
    return(
      <Wrapper>
        <Grid container spacing={1}>
          <PageHeader title='Users 50'>
            <AddUser />
          </PageHeader>
          <UsersTable />

        </Grid>
      </Wrapper>
    );
  }
}
export default Users;
