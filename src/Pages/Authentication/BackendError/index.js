import React from 'react';



class BackendError extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      something: 0,
    }
  }
  render(){
    return(
      <h1>BackendError</h1>
    );
  }
}
export default BackendError;
