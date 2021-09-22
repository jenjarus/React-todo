import React from 'react';

const FilterBlock = ({showAllTask, showDoneTask, showActiveTask, delDoneTask}) => {
    return (
        <div>
            <button onClick={showAllTask}>Показать все</button>
            <button onClick={showActiveTask}>Показать активные</button>
            <button onClick={showDoneTask}>Показать выполненые</button>
            <button onClick={delDoneTask}>Очистить выполненые</button>
        </div>
    );
};

export default FilterBlock;
