import React from 'react';

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

export default FilterBlock;
