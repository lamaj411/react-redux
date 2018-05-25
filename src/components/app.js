import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

const App=() => (
<div>
	<div className="col-lg-3 well">

		<UserList />
		<hr />
</div>	<div className="col-lg-9 ">

		<UserDetail />
	</div>
</div>
);


export default App;
