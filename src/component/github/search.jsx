import React, {Component} from 'react';

class Search extends Component {

  onSubmit(e){
    e.preventDefault();
    console.log(this.refs);
    let username = this.refs.username.value.trim();
    if(!username) {
      alert('Enter username');
    } else {
        this.refs.username.value = "";
        this.props.onFormSubmit(username);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search github users</label>
          <input className="form-control" type="text" ref="username" placeholder="Enter username here"></input>
          <button className="btn btn-info form-control">Search User</button>
        </form>
      </div>
    );
  }
}

export default Search;
