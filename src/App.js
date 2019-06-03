import React from 'react';

import List1 from './List1';
import List2 from './List2';

class App extends React.Component {

	state = {
		list1: [],
		list2: [],
		pageNumber: 0,
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
			return response.json()
		}).then((data) => {
			const nameData = data.map((user) => {
				return user
			})
			
			const list1 = nameData.slice(0, 5)
			const list2 = nameData.slice(5, 10)
			this.setState({ list1: list1, list2: list2 })
		})
	}

	onPageNumberChange = (page) => {
		this.setState({ pageNumber: page })
	}

	handleAddUser = (username, email) => {
		if (!username && !email) {
			return 'Enter username and email'
		} else {
			this.setState((prevState) => {
				return {
					list1: [...prevState.list1, {name: username, email: email}]
				}
			})
		}
	}

	handleAddUserList2 = (username, email) => {
		if (!username && !email) {
			return 'Enter username and email'
		} else {
			this.setState((prevState) => {
				return {
					list2: [...prevState.list2, {name: username, email: email}]
				}
			})
		}
	}
	

	render() {
		return (
			<div>
				{this.state.pageNumber === 0 ? 
					(<div><List1 list1={this.state.list1} handleAddUser={this.handleAddUser}/> <button onClick={(e) => this.onPageNumberChange(1)}>Next</button></div>) 
					: 
					(<div><List2 list2={this.state.list2} handleAddUserList2={this.handleAddUserList2}/> <button onClick={(e) => this.onPageNumberChange(0)}>Prev</button></div>)}
			</div>
		);
	}
}

export default App;
