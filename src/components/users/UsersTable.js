import React from 'react';
import UsersService from './services/UsersService';
import {toast} from 'react-toastify';

class UsersTable extends React.Component {

  handleClickDeleteUser = (user) => {
    console.log(user);

    UsersService.deleteUser(user).then((response) => {
      const {name, email} = response.data;
      toast.success(`User deleted: ${name} (${email})`);
    });
  };

  render() {

    const {users} = this.props;

    return (
        <div>
          <h1>Users</h1>
          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>

            {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i className="far fa-trash-alt"
                       onClick={() => this.handleClickDeleteUser(user)}></i>
                  </td>
                </tr>))
            }

            </tbody>
          </table>
        </div>
    );
  }
}

export default UsersTable;
