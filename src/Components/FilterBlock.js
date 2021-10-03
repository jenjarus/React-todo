import React from 'react';
import { connect } from 'react-redux'
import { showAllTask, showActiveTask, showDoneTask, delDoneTask } from '../actions'

const FilterBlock = ({filter, showAllTask, showDoneTask, showActiveTask, delDoneTask}) => {
    return (
        <div className={'btns'}>
            <button onClick={showAllTask} className={`btn ${filter === 'all' ? 'active' : ''}`}>Показать все</button>
            <button onClick={showActiveTask} className={`btn ${filter === 'active' ? 'active' : ''}`}>Показать активные</button>
            <button onClick={showDoneTask} className={`btn ${filter === 'done' ? 'active' : ''}`}>Показать выполненые</button>
            <button onClick={delDoneTask} className={'btn'}>Очистить выполненые</button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        filter: state.filter,
    }
}
const mapDipatchToProps = {
    showAllTask,
    showActiveTask,
    showDoneTask,
    delDoneTask,
};

export default connect(mapStateToProps, mapDipatchToProps)(FilterBlock)
