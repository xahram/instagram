import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/UI/Layout/Layout';
import Feeds from './components/Feeds/Feeds';
import Profile from './components/Profile/Profile'
import EditUser from './components/Profile/EditUser/EditUser'
import UserProfile from './components/UserProfile/UserProfile'
import Chat from './components/Chat/Chat'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

// import Toolbar from './components/Toolbar/Toolbar'

function App() {
  return (
    <div className="App">
        
      <Layout>
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/edit-user' exact component={EditUser} />
          <Route path='/third-user' component={UserProfile} />
          <Route path='/chat' component={Chat} />
          <Redirect to='/' />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
