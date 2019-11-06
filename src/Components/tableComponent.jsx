import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Table extends React.Component {

    render(){
        const users = this.props.users
        // console.log(users);
        return(
        <div>
            <h1>Table Component</h1>
            <ul>
            {users && users.map((user)=>{
                return (
                    <li key={user.id}>{user.username} | {user.email} | {user.phone}</li>
                )
            })}
            </ul>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log("state",state);
    return {
        users: state.firestore.ordered.users,
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users', orderBy: ['username', 'desc'] }
    ])
)(Table)