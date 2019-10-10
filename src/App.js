import React, { Fragment } from 'react';
import { Redirect, Switch } from "react-router-dom"
import renderEach from "@utils/touterEach";
import { ResignRouter } from "@router"
class App extends React.Component {
  render(){
    return (
      <Fragment>
        <Switch>
          {renderEach(ResignRouter)}
          <Redirect from="/" to="/Login" />
        </Switch>
      </Fragment>
    )
  }
}

export default App;
