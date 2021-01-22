import React from 'react';
import { PageHeader, Wrapper, ProjectCard } from '../../../Components';

// material UI
import Grid from "@material-ui/core/Grid";



class Projects extends React.Component{
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
          <PageHeader title='Projects 120'/>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </Grid>
      </Wrapper>
    );
  }
}
export default Projects;
