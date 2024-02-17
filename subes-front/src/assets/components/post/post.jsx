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
    },[]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const dividedPosts = [];
    for (let i = 0; i < posts.length; i+= 3) {
        dividedPosts.push(posts.slice(i, i+3));
    }

    return (
        <section className='post-section'>
            {dividedPosts.map((row, index) => (
                <div key={index} className="row">
                    {row.map(post => (
                        <div key={post.id} className="col">
                            <img src={post.media} alt="" />
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
