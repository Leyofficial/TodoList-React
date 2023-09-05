let callSubscriber = () => {
    console.log('Change')
}

let store = {
    _state: {
        todoList: [
            {
                id: 0,
                todoText: 'hello',
                isComplite: false,
            },
            {
                id: 1,
                todoText: 'You good ?',
                isComplite: true,
            },
            {
                id: 2,
                todoText: 'Молоко',
                isComplite: false,
            },
            {
                id: 3,
                todoText: 'Купить хлеб',
                isComplite: true,
            },
        ],
        text: '',
    },
     updateCompliteList(item) {
        debugger
        if (item.isComplite) {
            item.isComplite = false
            callSubscriber(this._state);
        } else {
            item.isComplite = true
            callSubscriber(this._state);
            
        }
    },
    getState() {
        return this._state
    },
    addTodo(text) {
        const newTodo = {
            todoText: text,
            isComplite: false,
        }
        this.state.todoList.push(newTodo)
        callSubscriber(this.state)
        // зарендарить опять страничку .
    },
    updateStateText(newValue) {
        this.state.text = newValue
        callSubscriber(this.state);
    },
    subscribe(observe) {
        callSubscriber = observe
    }
}

window.store = store

export default store




// _____________________________________________________________________





// const comments = [
//     { id: 1, name: 'Dan', comment: 'Я работал сегодня 7 часов!' },
// ]

// **** const todoList = [
//     {
//         todoText: 'hello',
//         isComplite: false,
//     },
//     {
//         todoText: 'You good ?',
//         isComplite: true,
//     },
// ]

// ****** const state = {
//     comments: [...comments],
//     todoList: [...todoList],
//     text: '',
// }

// window.state = state

// export function addTodo(text) {
//     const newTodo = {
//         todoText: text,
//         isComplite: false,
//     }
//     state.todoList.push(newTodo)
//     rerender(state)
//     // зарендарить опять страничку .
// }
// export function updateStateText(newValue) {
//     state.text = newValue
//     rerender(state);
// }

// export function subscribe (observe) {
//     rerender = observe
// }
// export default state