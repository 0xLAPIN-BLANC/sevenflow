import React, { useState, useEffect } from "react";
import axios from "axios";



function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/tasks/")
            .then(response => setTasks(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Tasks List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - Priority: {task.priority} - Status: {task.status}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;