import React from 'react';
import Post from '../post/post';
import './feed.css'

const Feed = () => {
    return (
        <div className='feed'>
            <h1>C U B E S</h1>
            <div className='post-container'>
                <Post />
            </div>
        </div>
    );
};

export default Feed;
