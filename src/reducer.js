const initialState = {
    filter: 'all',
    tasks: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task],
            };
        case 'DONE_TASK':
            return {
                ...state,
                tasks: [...state.tasks.map(el => {
                    if(el.id === action.id)
                    {
                        el.done = !el.done
                        if(state.filter === 'active') {
                            el.show = false
                        }
                    }
                    return el;
                })]
            };
        case 'DEL_TASK':
            return {
                ...state,
                tasks:  [...state.tasks.filter(el => el.id !== action.id)]
            };
        case 'DEL_DONE_TASK':
            return {
                ...state,
                tasks:  [...state.tasks.filter(el => el.done !== true)]
            };
        case 'SHOW_ALL_TASK':
            return {
                ...state,
                tasks: [...state.tasks.map(el => {
                    el.show = true;
                    return el
                })],
                filter: 'all',
            };
        case 'SHOW_ACTIVE_TASK':
            return {
                ...state,
                tasks: [...state.tasks.map(el => {
                    el.show = true;
                    if(el.done === true)
                        el.show = false;
                    return el;
                })],
                filter: 'active',
            };
        case 'SHOW_DONE_TASK':
            return {
                ...state,
                tasks: [...state.tasks.map(el => {
                    el.show = true;
                    if(el.done === false)
                        el.show = false;
                    return el;
                })],
                filter: 'done',
            };
        default:
            return state;
    }
}
