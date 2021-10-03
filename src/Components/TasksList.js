import React from 'react';
import { connect } from 'react-redux'
import TasksListItem from './TasksListItem'

const TasksList = ({tasks}) => {
    return (
        <ul className={'result'}>
            {tasks.map((el) =>{
                return <TasksListItem
                    key={el.id}
                    id={el.id}
                    text={el.text}
                    done={el.done}
                    show={el.show}
                />}
            )}
        </ul>
    );
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TasksList)
