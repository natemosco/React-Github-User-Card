import React from 'react'

export default function UserCard({ user }) {
    return (
        <div className="card">
            <img src={avatar_url} />
            <div className="card-info">
                <h3 className="name">{name}</h3>
                <p className="username">{login}</p>
                <p>Location: {location}</p>
                <p>Profile:
                <a href={html_url}>{html_url}</a>
                </p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Bio: {bio}</p>
            </div>
        </div>
    )
}
