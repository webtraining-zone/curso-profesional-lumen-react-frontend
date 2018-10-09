import React from 'react';

class UsersTable extends React.Component {

  handleClickOnIconToDeleteUser = (user) => {
    // This function is passed as "prop"
    // See more about in: https://www.javascriptstuff.com/component-communication/#3-callback-functions
    this.props.onDeleteUser(user);
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
                       onClick={() => this.handleClickOnIconToDeleteUser(
                           user)}></i>
                  </td>
                </tr>))
            }

            </tbody>
          </table>
        </div>
    );
  }
}

// UsersTable.propTypes = {
//   onDeleteUser: React.PropTypes.func,
// };

export default UsersTable;
