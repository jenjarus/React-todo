import React from 'react';
import { connect } from 'react-redux'
import { checkboxDone, delTask } from '../actions'

const TasksListItem = ({id, done, text, show, checkboxDone, delTask}) => {
    const classNameDone = done ? 'done' : '';
    const styleShow = {display: 'none'};

    return (
        <li style={!show ? styleShow : {}} key={id}>
            <input type="checkbox" checked={done} onChange={() => checkboxDone(id)} />
            <span className={classNameDone}>{text}</span>
            <button onClick={() => delTask(id)} className={'btn close'}>x</button>
        </li>
    );
};

const mapDipatchToProps = {
    checkboxDone,
    delTask,
};

export default connect(null, mapDipatchToProps)(TasksListItem)
