import React from 'react';

const TasksList = ({tasks, checkboxDone, delTask}) => {
    return (
        <ul className={'result'}>
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
    const styleShow = {display: 'none'};

    return (
        <li style={!task.show ? styleShow : {}} key={task.id}>
            <input type="checkbox" checked={task.done} onChange={() => checkboxDone(task.id)} />
            <span className={classNameDone}>{task.text}</span>
            <button onClick={() => delTask(task.id)} className={'btn close'}>x</button>
        </li>
    );
};

export default TasksList;
