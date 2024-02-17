import React from 'react';
import Post from '../post/post';

const Feed = () => {
    return (
        <div className='feed'>
            <h1>Feed</h1>
            <div className='post-container'>
                <Post />
            </div>
        </div>
    );
};

export default Feed;
