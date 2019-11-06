import React from 'react';
import {createUser} from '../store/actions/userActions';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(){
    super()
    this.state = {
        username: '',
        email: '',
        phone: ''
        }
    }

    handleChange = (event) => {
        const nam = event.target.name;
        const val = event.target.value;
        this.setState({[nam]: val}, ()=>{
        //    console.log(val); 
        })   
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        for (let key in this.state){
            console.log(key, this.state[key])
            
        } 
        this.props.createUser(this.state);
    }

    render(){
        return (
            <div>
            <h1>Form Component</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    type="text" />
                <br></br>
                <label>Email: </label>
                <input
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    type="text" />
                <br></br>
                <label>Phone: </label>
                <input
                    id="phone"
                    name="phone"
                    onChange={this.handleChange}
                    type="text" />
                <br></br>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
