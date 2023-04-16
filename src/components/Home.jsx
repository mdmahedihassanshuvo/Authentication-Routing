import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';

const Home = () => {

    const {user} = useContext(userContext)

    return (
        <div>
            <h2>{user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;