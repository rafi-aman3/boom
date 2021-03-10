import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius : '20px'

    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
            <Link to={`/user/${id}`}>
                <button>More Info</button>
            </Link>
            
        </div>
    );
};

export default Friends;