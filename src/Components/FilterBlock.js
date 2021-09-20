import React from 'react';

const FilterBlock = ({delDoneTask}) => {
    return (
        <div>
            <button>Показать все</button>
            <button>Показать активные</button>
            <button>Показать выполненые</button>
            <button onClick={delDoneTask}>Очистить выполненые</button>
        </div>
    );
};

export default FilterBlock;
