import React from 'react';
import UsersTable from './UsersTable';
import UsersService from './services/UsersService';
import {toast} from 'react-toastify';
import UsersFormCreate from './UsersFormCreate';

class UsersIndex extends React.Component {

  state = {users: []};

  render() {

    const {users} = this.state;

    return (
        <div className="container">
          <UsersTable users={users} onDeleteUser={this.handleClickDeleteUser}/>
          <UsersFormCreate onCreateUser={this.handleOnCreateUser}/>
        </div>
    );
  }

  componentDidMount() {
    UsersService.getAllUsers().
        then((response) => this.setState({users: response.data}));
  }

  removeUserFromCurrentState = (userToDelete) => {

    console.log('userToDelete', userToDelete);
    this.setState(
        prevState => ({
          users: prevState.users.filter(
              user => user.id !== userToDelete.id),
        }));
  };

  handleOnCreateUser = (user) => {
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
  };

  handleClickDeleteUser = (user) => {

    UsersService.deleteUser(user).then((response) => {
      const user = response.data;
      const {name, email} = user;
      toast.success(`User deleted: ${name} (${email})`);

      // Delete user from current state
      this.removeUserFromCurrentState(user);
    });
  };
}

export default UsersIndex;
