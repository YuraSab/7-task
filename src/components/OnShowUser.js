import React, {Component} from 'react';
import UserService from "../services/userService";

class OnShowUser extends Component {

    mainRef = React.createRef();

    state = {inputValue: '', user: null};

    userService = new UserService();

    onChangeNumber = () => {
        console.log(this.mainRef.current.value);
        this.setState({inputValue: this.mainRef.current.value});
    }


    onChooseUser = async (e) => {
        e.preventDefault();
        let id = this.state.inputValue;
        let user = await this.userService.getUserById(id);
        this.setState({user: user});
        console.log(user);
    }



    render() {

        let {inputValue, user} = this.state;

        return (
            <div>
                <h3>Select user id (1-10)</h3>
                <form onSubmit={this.onChooseUser}>
                    <input
                        type={"number"}
                        value={inputValue}
                        onInput={this.onChangeNumber}
                        ref={this.mainRef}
                    />
                    <button disabled={inputValue < 1 || inputValue > 10}>Show User</button>
                </form>

                <div>
                    {
                        user && <h3>
                            {user.id}. {user.name} - {user.email}
                        </h3>
                    }
                </div>
            </div>
        );
    }
}

export default OnShowUser;