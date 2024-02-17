import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link desde react-router-dom
import './post.css';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/api/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .then(() => setLoading(false));
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const renderMedia = (media) => {
        console.log("Media:", media);
    
        if (media && media.includes(".tiiny.site")) {
            console.log("Rendering PDF:", media);
            return <iframe className='media' src={media} title="PDF Viewer"></iframe>;
        } else if (media && media.includes("youtube")) {
            console.log("Rendering YouTube video:", media);
            return <iframe className='media' src={media} title="YouTube Video"></iframe>;
        } else if (media && media.includes(".mp4")) {
            console.log("Rendering  video:", media);
            return <video className='media' autoPlay={true} muted={true} src={media} title="YouTube Video"></video>;
        } else if (media && !media.includes("http")) {
            console.log("Rendering text:", media);
            return <h3 className='media-text'>{media}</h3>;
        }else if (media) {
            console.log("Rendering image:", media);
            return <img className='media' src={media} alt="" />;
        } else {
            return null;
        }
    };

    const dividedPosts = [];
    for (let i = 0; i < posts.length; i += 1) {
        dividedPosts.push(posts.slice(i, i + 1));
    }

    return (
        <section className='post-section'>
            {dividedPosts.map((row, index) => (
                <div key={index} className="row">
                    {row.map(post => (
                        <div key={post.id} className="col">
                            <Link to={`/posts/${post.id}`}>
                                {renderMedia(post.media)}
                                <p>{post.user ? post.user.username : 'Anonymous'}</p>
                                <h2 className='post-title'>{post.title}</h2>
                                <p>{post.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Post;
