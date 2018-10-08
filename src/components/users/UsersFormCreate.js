import React from 'react';
import axios from 'axios';

class UsersFormCreate extends React.Component {

  handleSubmitWithFormData = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.warn('Invalid!');
      return;
    }

    const url = 'http://localhost:8085/api/v1/users';

    const data = new FormData(event.target);

    // console.log(data.get('username'));
    axios.request({
      url: url,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      data: {
        name: data.get('name'),
        username: data.get('username'),
        email: data.get('username'),
        password: data.get('password'),
      },
    }).then((response) => console.log('User created!', response.data));

  };

  render() {

    return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6">

              <h1>Create User</h1>
              <form onSubmit={this.handleSubmitWithFormData} noValidate>

                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input id="name" name="name" className="form-control"
                         type="text"/>
                </div>


                <div className="form-group">
                  <label htmlFor="username">Email:</label>
                  <input id="email" name="email" className="form-control"
                         type="email"/>
                </div>

                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input id="username" name="username" className="form-control"
                         type="text"/>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input id="password" name="password" className="form-control"
                         type="password"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit
                </button>
              </form>
            </div>

          </div>
        </div>
    );
  }
}

export default UsersFormCreate;
