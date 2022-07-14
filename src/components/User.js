import React, {Component} from 'react';

class User extends Component {
    render() {

        let {item, onDeleteUser} = this.props;

        return (
            <div>
                {item.id}. {item.name} - <button onClick={() => onDeleteUser(item.id)}>Delete</button>
            </div>
        );
    }
}

export default User;