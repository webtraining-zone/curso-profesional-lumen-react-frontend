import React from 'react';
import UsersTable from './UsersTable';
import axios from 'axios';

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
    const url = 'http://localhost:8085/api/v1/users';

    axios.request({
      url: url,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      data: {},// Important: keep data empty so the header "Content-Type" is not removed
    }).then((response) => this.setState({users: response.data}));
  }
}

export default UsersIndex;
