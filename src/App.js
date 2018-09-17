import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Signin from './components/Signin/Signin';
import SideDrawer from './components/SideDrawer/SideDrawer';
import CadFazendas from './components/Cadastros/Fazendas/CadFazendas';
import Backdrop from './components/Backdrop/Backdrop';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const initialState = {
  route: 'home',
  isSignedIn: false,
  sideopen: false,
  user: {
    id: '',
    name: '',
    email: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.usercod,
        name: data.usernom,
        email: data.useremail
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(user => {
          if (user) {
            this.loadUser(user.id)
            this.onRouteChange('home');
          }
        })
        .catch(console.log)
    }
  }

  handleDrawerClick = () => {
    this.setState((prevState) => {
      return { sideopen: !prevState.sideopen };
    })
  }

  handleBackdropClick = () => {
    this.setState({ sideopen: false })
  }

  render() {
    const { route} = this.state;
    let backDrop;
    if (this.state.sideopen) {
      backDrop = <Backdrop click={this.handleBackdropClick} />;
    }
    return (
      <div style={{ height: '100%' }}>
        {route === 'home'
          ? <div>
            <Toolbar handleDrawerClick={this.handleDrawerClick} />
            <SideDrawer show={this.state.sideopen} close={this.handleBackdropClick} />
            {backDrop}
            <main style={{ marginTop: '4rem', position: 'absolute', width: '100%' }}>
              <Switch>
                <Route exact path="/" component={(props) => <CadFazendas />} />
              </Switch>
            </main>
          </div>
          :
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}
export default App;