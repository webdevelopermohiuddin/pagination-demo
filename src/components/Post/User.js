import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <hr/>
            <h4>Title: {user.title}</h4>
             <p>{user.body}</p>
        </div>
    );
};

export default User;