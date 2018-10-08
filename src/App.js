import React, {Component} from 'react';
import UsersIndex from './components/users/UsersIndex';
import UsersFormCreate from './components/users/UsersFormCreate';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <UsersIndex/>
          <UsersFormCreate/>
        </div>
    );
  }
}

export default App;
