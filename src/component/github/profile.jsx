import React, {Component} from 'react';
import RepoList from './repolist.jsx';

class Profile extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.userData.name}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <img className="thumbnail" src={this.props.userData.avatar_url} style={{width:"100%"}}/>
              </div>
              <div className="col-md-8"></div>
                <div className="row">
                  <span className="label label-primary">{this.props.userData.public_repos} repos</span>
                  <span className="label label-success">{this.props.userData.public_gists} gists</span>
                  <span className="label label-info">{this.props.userData.followers} followers</span>
                  <span className="label label-danger">{this.props.userData.following} following</span>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="list-group">
                        <li className="list-group-item">username: {this.props.userData.login}</li>
                        <li className="list-group-item">Location: {this.props.userData.location}</li>
                        <li className="list-group-item">Email: {this.props.userData.email}</li>
                    </ul>
                    <br/>
                    <a className = "btn btn-primary" target="_blank" href={this.props.userData.html_url}> Visit Profile</a>
                  </div>
                </div>
              </div>
                <hr/>
                <h3>User repositories</h3>
                <RepoList userRepos={this.props.userRepos}/>
            </div>
          </div>
        </div>
      );
  }
}

export default Profile;
