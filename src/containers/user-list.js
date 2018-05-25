import React, {Components} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class userList extends React.Component{
	

createListItems(){
return this.props.users.map((user) =>{
return (
	<li key={user.name} onClick={ () => this.props.selectUser(user)} className="list-group-item">{user.name}</li>
	);
});
}



render()
	{
	return (
		<ul className="list-group">
			{this.createListItems()}	
		</ul>	
		);	
	}
}
function mapStateToProps(state)
{
return {
	users:state.users
};

}




function matchDispatchToProps(dispatch)
{
return bindActionCreators({selectUser:selectUser},dispatch)

}
export default connect(mapStateToProps,matchDispatchToProps)(userList);
