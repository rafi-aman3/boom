import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Friends from '../Friends/Friends'

const Home = () => {
    const [friends, setfriends] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios(url)
      .then(res => {
        setfriends(res.data);
      })
  }, []);
  

    return (
        <div>            
      {
        friends.map(friend => <Friends key={friend.id} friend={friend}></Friends>)
      }
        </div>
    );
};

export default Home;