import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    };

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <div className="p-2">
                    <label className="">New Comment :</label>
                </div>
                <div className="p-2 w-25">
                    <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="p-2">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>;
};

export default CommentCreate;