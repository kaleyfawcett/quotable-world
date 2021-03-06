import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Cards from './components/cards'
import CreateCard from './components/createCard'
import Login from './components/login'
import ProfilePage from './components/profile'
import FollowFriends from './components/Friends'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: window.localStorage.getItem('login_auth_token')

    }
  }

  render () {
    return (
      <div className='App'>
        <header>What A Quotable World</header>
        <h3>An app to save and share all of your favorite quotes</h3>
        <Router>
          <Nav />
          <Switch>
            <Route path='/login/' component={Login} token={this.state.token} setToken={token => this.setState({ token: token })} />
            <Route path='/cards/all/'>
              <Cards token={this.state.token} />
            </Route>
            <Route path='/profile/' component={ProfilePage} />
            <Route path='/friends/'>
              <FollowFriends token={this.state.token} />
            </Route>
            <Route path='/createcard/'>
              <CreateCard token={this.state.token} />
            </Route>
          </Switch>

        </Router>

        <footer className='footer'> Created by Sarah Akus and Kaley Fawcett</footer>
      </div>
    )
  }
}

export default App
