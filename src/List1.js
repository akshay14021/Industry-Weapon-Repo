import React, { Component } from 'react';

class List1 extends Component {

    state = {
        error: undefined
    }  

    handleAddUser = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value.trim()
        const email = e.target.elements.email.value.trim()

        const error = this.props.handleAddUser(username, email)
        
        this.setState(() => {
            return {
                error
            }
        })
        if (!error) {
            e.target.elements.username.value = ''
            e.target.elements.email.value = ''
        }
    }

    render() {

        const sortedData = this.props.list1.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })

        return (
            <div>
                {this.state.error || 
                    sortedData.map((user, index) => {
                        return user.email.includes('.biz') ? <p className="username" key={index}>{user.name} </p> : <p key={index}>{user.name} </p>
                    })
                }

                <form onSubmit={this.handleAddUser}>
                    <input type="input" name="username" placeholder='Username' />
                    <input type="email" name="email" placeholder="Email" />
                    <button>Add User</button>
                </form>
            </div>
        );
    }
}

export default List1;