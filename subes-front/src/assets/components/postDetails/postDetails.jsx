import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './postDetails.css';

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post details:', error));
    }, [postId]);

    if (!post) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="post-details">
            {renderMedia(post.media)}
            <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>Posted by: {post.user.username}</p>
            </div>
            
        </div>
    );
};

const renderMedia = (media) => {
    if (media && media.includes(".tiiny.site")) {
        return <iframe src={media} title="PDF Viewer"></iframe>;
    } else if (media && media.includes("youtube")) {
        return <iframe src={media} title="YouTube Video"></iframe>;
    } else if (media && !media.includes("http")) {
        return <h3 className='media-text'>{media}</h3>;
    } else if (media) {
        return <img src={media} alt="" />;
    } else {
        return null;
    }
};

export default PostDetails;
