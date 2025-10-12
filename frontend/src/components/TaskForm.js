import React, { useState } from 'react';
import axios from 'axios';



function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/tasks/', { title, description })
            .then(response => {
                console.log(response);
                window.location.reload();
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
            <button type="submit">Create Task</button>
        </form>
    );
}

export default TaskForm;
