import React from 'react';

const TasksList = ({tasks, checkboxDone, delTask}) => {
    return (
        <ul>
            {tasks.map((el, i) =>
                <TasksListItem
                    id={i}
                    task={el}
                    checkboxDone={checkboxDone}
                    delTask={delTask}
                />
            )}
        </ul>
    );
};

const TasksListItem = ({id, task, checkboxDone, delTask}) => {
    const classNameDone = task.done ? 'done' : '';

    return (
        <li key={id}>
            <input type="checkbox" checked={task.done} onChange={() => checkboxDone(id)} />
            <span className={classNameDone}>{task.text}</span>
            <button onClick={() => delTask(id)}>Удалить</button>
        </li>
    );
};

export default TasksList;
