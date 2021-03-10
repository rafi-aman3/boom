import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const { id } = useParams();
    const [friendDetail, setfriendDetail] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        axios(url)
            .then(res => setfriendDetail(res.data))
    }, []);

    const {name, email, phone, username} = friendDetail;
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <div>
            <h2>{name} Details</h2>
            <h3>{name}</h3>
            <p>{username}</p>
            <br/>
            <p>{phone}</p>
            <p>{email}</p>
            <button onClick={handleClick}>Go Back</button>
        </div>
    );
};

export default FriendDetails;