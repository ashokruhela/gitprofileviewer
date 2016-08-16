import React, {Component} from 'react';
import Profile from './github/profile.jsx';
import Search from './github/search.jsx';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        username:'ashokruhela',
        userData: [],
        userRepos: [],
        perPage: 100
      };
  }

  getUserData(){
    $.ajax({
      url:'https://api.github.com/users/' + this.state.username + '?client_id='+this.props.clientId + '&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({
          userData: data
        });
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          username: null
        });
        alert(err);
      }.bind(this)
    });
  }

  getUserRepos(){
    console.log(`https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`)
    $.ajax({
      // url:'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage+'&client_id=' + this.props.clientId + '&client_secret='+ this.props.clientSecret + '&sort=created',
      url:`https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({
          userRepos: data
        });
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          username: null
        });
        alert(err);
      }.bind(this)
    });
  }

  handleSearch(username){
    this.setState({
      username: username
    }, function(){
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleSearch.bind(this)}/>
        <Profile {...this.state}/>
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '6a4ed9799d68442a16b4',
  clientSecret: '59f163261a8203e0099617a8a58c3dfac7e06a22'
}

export default App;
