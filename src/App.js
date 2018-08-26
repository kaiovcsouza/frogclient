import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Signin from './components/Signin/Signin';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';



const initialState = {
  route: 'signin',
  isProfileOpen: false,
  isSignedIn: false,
  sideopen: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: '',
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
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
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

  toggleModal = () => {
    this.setState(state => ({
      ...state,
      isProfileOpen: !state.isProfileOpen,
    }));
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
    const { isSignedIn, route, isProfileOpen, user } = this.state;
    let backDrop;

    if (this.state.sideopen) {
      backDrop = <Backdrop click={this.handleBackdropClick}/>;
    }

    return (
      <div style={{ height: '100%' }}>
        {route === 'home'
          ? <div>
            <Toolbar handleDrawerClick={this.handleDrawerClick} />
            <SideDrawer show={this.state.sideopen}/>
            {backDrop}
            <main style={{marginTop: '5rem', marginLeft: '2rem',position:'fixed' }}>
              Aqui ficará as telas do sistema
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