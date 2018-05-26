import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends React.Component{
	render(){
if(!this.props.user){
return(<h4>select a name</h4>);
}
else
{
			return(

<div>
<h3>{this.props.user.name}</h3>
<img src={this.props.user.img} className="img-rounded"/>
<table className="table">
<tr><td>Rating </td><td>:  {this.props.user.rating}</td><br /><br /></tr>
<tr><td>Description</td><td>:  {this.props.user.Description}</td><br /><br /></tr>
<tr><td>Likes</td><td>:  {this.props.user.Likes}</td><br /><br /></tr>
<tr><td>Dislikes </td><td>:  {this.props.user.Dislikes}</td><br /><br /></tr>
</table>
</div>
);
}
		}
}
function mapStateToProps(state){
return {
user:state.activeUser};
}


export default connect(mapStateToProps)(UserDetail);
