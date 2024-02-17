import React, { useState, useEffect } from 'react';

const Post = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPost(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <h1>{post.title}</h1>
                    <h2>{post.description}</h2>
                </div>
            )}
        </div>
    );
};

export default Post;
