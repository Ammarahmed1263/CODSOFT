

const initialState = {
    title: '',
    description: '',
    tasks: []
}

const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'REMOVE_TASK':
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.payload)}
        case 'EDIT_TASK':
            return {...state, tasks: state.tasks.map(task => (
                task.id === action.payload.id ? {...task, title: action.payload.title, description: action.payload.description} : task))};
        case 'TOGGLE_STATE':
            return {...state, tasks: state.tasks.map(task => (
                    task.id === action.payload ? { ...task, checkBox: !task.checkBox } : task
                ))
            };
        default:
            return state;
    }
}

const inputReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_TITLE':
            return {...state, title: action.payload}
        case 'UPDATE_DESC':
            return {...state, description: action.payload}
        default:
            return state;
    }
}

const boxReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return {...state, checkBox: !action.payload}
        default:
            return state;
    }
}

export { taskReducer, inputReducer, boxReducer }