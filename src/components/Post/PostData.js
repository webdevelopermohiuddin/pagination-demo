import React from 'react';
import {USER_PER_PAGE} from '../Utilitis/Constents';
import User from './User';

const PostData = ( {post, page} ) => {
    const startIndex = ( page - 1 ) * USER_PER_PAGE;
    const selectedUsers = post.slice(startIndex, startIndex + USER_PER_PAGE);
    return selectedUsers.map(user => (
        <User user={user}/>
    ))
};

export default PostData;