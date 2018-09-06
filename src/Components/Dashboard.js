import React, { Component } from 'react';
import axios from 'axios';
// making a profile page (?)
import {connect} from 'react-redux';
import {logIn, logOut } from '../redux/reducer';

class Dashboard extends Component {
    componentDidMount() {
        axios.get('/api/user-data').then(response => {
            const user = response.data;
            this.props.logIn(user);
            this.props.logOut();
        })
    }

    render() {
        const { user } = this.props;
        return ( 
            <div>
            <h1>Dashboard</h1>
            { user 
            ?
            <div>
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <img src={user.picture}/>

                <button onClick={this.logOut}>Log out</button>
            </div>
            : <div>You need to log in</div>
        }
        </div>    
        );
    }
}

const mapDispatchToProps = {
    logIn,
    logOut
}

function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}

 
export default connect (mapStateToProps, mapDispatchToProps) (Dashboard);