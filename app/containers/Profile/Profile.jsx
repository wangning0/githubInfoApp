import React ,{Component} from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
class Profile extends Component {
	state = {
		notes:['1','2','3'],
		bio:{
			name:'wangning'
		},
		repos:['a','b','c']
	}

	render(){
		console.log(this.props);
		return (
			<div className="row">
				<div className="col-md-4">
         			 <UserProfile
			            username={this.props.params.username}
			            bio={this.state.bio} />
				</div>
				<div className="col-md-4">
          			<UserRepos repos={this.state.repos} />
		        </div>
		        <div className="col-md-4">
         		 	<Notes notes={this.state.notes} />
		        </div>
			</div>
		)
	}
}

export default Profile;