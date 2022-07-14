import React, {Component} from 'react';
import UserService from "../services/userService";
import User from "./User";

class Users extends Component {

    state = {users: []};

    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getUsers();
        this.setState({users: users});
    }

    onDeleteUser = (id) => {
        let {users} = this.state;
        let deleted = users.filter(value => value.id !== id);
        this.setState({users: deleted})
    }


    render() {

        let {users} = this.state;

        return (
            <div>
                {
                    users.map(value => {
                        return (
                            <User
                                item = {value}
                                key = {value.id}
                                onDeleteUser = {this.onDeleteUser}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Users;