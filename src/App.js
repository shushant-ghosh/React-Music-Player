import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Tracks from './Components/Screens/Tracks'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Reference Router */}
          <Route exact path="/" render={() => <Menu><Home/></Menu>}></Route>
          <Route exact path="/home" render={() => <Menu><Home/></Menu>}></Route>
          <Route exact path="/about" render={() => <Menu><About/></Menu>}></Route>
          <Route exact path="/contact" render={() => <Menu><Contact/></Menu>}></Route>
          <Route exact path="/tracks/:id" render={(props) => <Menu><Tracks {...props} /></Menu>}></Route>

          {/* Component Router */}
          {/* <Route exact path="/tracks/:id" component={Tracks}></Route> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App