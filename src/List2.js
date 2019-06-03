import React, { Component } from 'react';

class List2 extends Component {

    state = {
        error: undefined
    }

    handleUserAddList2 = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value.trim()
        const email = e.target.elements.email.value.trim()

        const error = this.props.handleAddUserList2(username, email)

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

        const sortedData = this.props.list2.sort((a, b) => {
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

                <form onSubmit={this.handleUserAddList2}>
                    <input type="input" name="username" placeholder="Username" />
                    <input type="input" name="email" placeholder="Email" />
                    <button>Add User</button>
                </form>
            </div>
        );
    }
}

export default List2;