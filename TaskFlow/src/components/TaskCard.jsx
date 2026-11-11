tasks = [
    {
        id: 1, 
        name: "Learn Firebase",
        description: "Understand Firebase Fundamentals",
        completed: false
    },
    {
        id: 2,
        name: "Learn React",
        description: "Understand React Fundamentals",
        completed: false
    }
]




export default function TaskCard(tasks) {
    return (
        <div className="task-card">
            <div className="task-desc">
                <h3>{tasks.name}</h3>
                <p>{tasks.description}</p>
                {tasks.completed ? (
                <span className="completed">
                    Completed
                </span>
            ) : (
                <span className="pending">
                    Pending
                </span>
            )}
            </div>
            <div className="task-buttons">
                <button className="completed-button"></button>
                <button className="incomplete-button"></button>
            </div>
        </div>
    )
}