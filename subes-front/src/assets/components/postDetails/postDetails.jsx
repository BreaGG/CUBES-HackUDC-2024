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
                <p>Posted by: {post.user ? post.user.username : 'Anonymous'}</p>
            </div>
            
        </div>
    );
};

const renderMedia = (media) => {
    console.log("Media:", media);

    if (media && media.includes(".tiiny.site")) {
        console.log("Rendering PDF:", media);
        return <iframe className='iframe-detail' src={media} title="PDF Viewer"></iframe>;
    } else if (media && media.includes("youtube")) {
        console.log("Rendering YouTube video:", media);
        return <iframe className='iframe-detail' src={media} title="YouTube Video"></iframe>;
    } else if (media && media.includes(".mp4")) {
        console.log("Rendering  video:", media);
        return <video autoPlay='true' src={media} title="YouTube Video"></video>;
    } else if (media && !media.includes("http")) {
        console.log("Rendering text:", media);
        return <h3 className='media-text'>{media}</h3>;
    }else if (media) {
        console.log("Rendering image:", media);
        return <img src={media} alt="" />;
    } else {
        return null;
    }
};

export default PostDetails;
