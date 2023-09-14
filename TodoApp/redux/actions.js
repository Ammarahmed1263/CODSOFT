
const updateTitle = (taskTitle) => {
    return ({
        type: 'UPDATE_TITLE',
        payload: taskTitle
    })
}

const updateDesc = (taskDesc) => {
    return ({
        type: 'UPDATE_DESC',
        payload: taskDesc
    })
}

const addTask = (taskTitle, taskDescription) => {
    return ({
        type: 'ADD_TASK',
        payload: {id: Date.now(),title: taskTitle, description: taskDescription, checkBox: false}
    })
}

const removeTask = (taskID) => {
    return ({
        type: 'REMOVE_TASK',
        payload: taskID
    })
}

const editTask = (taskTitle, taskDescription, id) => {
    return ({
        type: 'EDIT_TASK',
        payload: {title: taskTitle, description: taskDescription, id}
    })
}

const toggleBox = (taskID) => {
    return({
        type: 'TOGGLE_STATE',
        payload: taskID
    })
} 

export { addTask, removeTask, editTask, updateTitle, updateDesc, toggleBox };