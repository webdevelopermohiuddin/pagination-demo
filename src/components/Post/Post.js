import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import PostData from './PostData';
import { USER_PER_PAGE } from '../Utilitis/Constents';

const Post = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    console.log(totalPages);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);

            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setLoading(false);
            setPost(res.data);

            setTotalPages(Math.ceil(res.data.length / USER_PER_PAGE))
        };
        fetchUsers();
    },[])

    const handleClick = (num) => {
        setPage(num);
    }
    return (
        <div>
            <h1>Pagination Demo</h1>
            <p>Page:{page}</p>
            {
                loading ? <p>Loading...</p> : <>
                <PostData post={post} page={page}/>
                <Pagination totalPages={totalPages} handleClick={handleClick}/>
                </>
            }
        </div>
    );
};

export default Post;