import React from 'react';
import UsersTable from './UsersTable';
import UsersService from './services/UsersService';

class UsersIndex extends React.Component {

  state = {users: []};

  render() {

    const {users} = this.state;

    return (
        <div className="container">
          <UsersTable users={users}/>
        </div>
    );
  }

  componentDidMount() {
    UsersService.getAllUsers().
        then((response) => this.setState({users: response.data}));
  }
}

export default UsersIndex;
