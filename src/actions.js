export function addTask(task) {
    return {
        type: 'ADD_TASK',
        task: task
    }
}
export function checkboxDone(id) {
    return {
        type: 'DONE_TASK',
        id: id
    }
}
export function delTask(id) {
    return {
        type: 'DEL_TASK',
        id: id
    }
}
export function delDoneTask() {
    return {
        type: 'DEL_DONE_TASK',
    }
}
export function showAllTask() {
    return {
        type: 'SHOW_ALL_TASK',
    }
}
export function showActiveTask() {
    return {
        type: 'SHOW_ACTIVE_TASK',
    }
}
export function showDoneTask() {
    return {
        type: 'SHOW_DONE_TASK',
    }
}
