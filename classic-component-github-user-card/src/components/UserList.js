import React, { Component } from 'react'
import UserCard from "./UserCard";

export default class UserList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <UserCard user={this.props.myGithubData}></UserCard>
                {this.props.followerData.map((user) => <UserCard user={user} key={Date.now()}></UserCard>)}
            </div>
        )
    }
}
