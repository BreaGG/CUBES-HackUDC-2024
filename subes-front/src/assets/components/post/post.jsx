import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
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

    const PDFViewer = () => {
        const pdfURL = 'https://drive.google.com/file/d/1RP7KUVtMJAp-AeujbLNNfeZd8n-JzLLO/view?usp=sharing';
        return (
            <div>
            <Document file={pdfURL}>
            <Page pageNumber={1} />
            </Document>
            </div>
            );
    };

    const renderMedia = (media) => {
        console.log("Media:", media);
        if (media && media.includes(".tiiny.site", 0)) {
            console.log("Rendering PDF:", media);
            return <iframe src={`${media}`} title="PDF Viewer" width="100%" height="600px"></iframe>;
            // return <PDFViewer/>
        } else if (media) {
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
