import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            username: '',
        }
    }    
    
    /* action methods */
    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
    
        /* debug */
        console.log(user);        
        
        /* axios sends user data to the backend fro writeing to database */
        axios.post('http://localhost:3002/users/add', user)
            .then(res => console.log(res.data));
        

        /* blank out the username field */
        this.setState({
            username: ''
        })
    }    
    
    
    
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}