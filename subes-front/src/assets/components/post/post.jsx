import React, { useState, useEffect } from 'react';
import './post.css'

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
            return <iframe src={media} title="PDF Viewer" ></iframe>;
        } else if (media && media.includes("youtube")) {
            console.log("Rendering YouTube video:", media);
            return <iframe src={media} title="YouTube Video" ></iframe>;
        } else if (media && !media.includes("http")) {
            console.log("Rendering text:", media);
            return <h3 className='media-text'>{media}</h3>;
        } else if (media) {
            console.log("Rendering image:", media);
            return <img src={media} alt="" />;
        } else {
            return null;
        }
    };
    
    

    const dividedPosts = [];
    for (let i = 0; i < posts.length; i += 2) {
        dividedPosts.push(posts.slice(i, i + 2));
    }

    return (
        <section className='post-section'>
            {dividedPosts.map((row, index) => (
                <div key={index} className="row">
                    {row.map(post => (
                        <div key={post.id} className="col">
                            {renderMedia(post.media)}
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};
export default Post;
