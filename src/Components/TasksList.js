import React from 'react';

const TasksList = ({tasks, checkboxDone, delTask}) => {
    return (
        <ul>
            {tasks.map((el) =>
                <TasksListItem
                    task={el}
                    checkboxDone={checkboxDone}
                    delTask={delTask}
                />
            )}
        </ul>
    );
};

const TasksListItem = ({task, checkboxDone, delTask}) => {
    const classNameDone = task.done ? 'done' : '';

    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.done} onChange={() => checkboxDone(task.id)} />
            <span className={classNameDone}>{task.text}</span>
            <button onClick={() => delTask(task.id)}>Удалить</button>
        </li>
    );
};

export default TasksList;
