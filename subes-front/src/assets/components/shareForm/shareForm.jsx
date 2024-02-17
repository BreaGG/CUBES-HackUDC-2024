import React, { useState } from 'react';
import './shareForm.css'

const PostForm = ({ onPostSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [media, setMedia] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    media
                })
            });
            if (!response.ok) {
                throw new Error('Error al enviar el post');
            }
            setTitle('');
            setDescription('');
            setMedia('');
            onPostSubmit();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Share a new cube to our CubeWorld</h1>
            <div>
                <label htmlFor="title">T I T L E</label>
                <br />
                <input 
                    type="text" 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                    className='input-text'
                />
            </div>
            <div>
                <label htmlFor="description">D E S C R I P T O N </label>
                <br />
                <textarea 
                    id="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="media">Y O U R  C U B E<span>(you can just write, or paste an url for visual media)</span></label>
                <br />
                <textarea 
                    type="text" 
                    id="media" 
                    value={media} 
                    onChange={(e) => setMedia(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className='input-submit'>S H A R E</button>
        </form>
    );
};

export default PostForm;
