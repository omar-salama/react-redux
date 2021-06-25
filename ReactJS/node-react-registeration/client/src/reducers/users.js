export const users = (state={}, actions) => {
    // eslint-disable-next-line default-case
    switch(actions.type){
        case 'USERS_LIST':
            return {...state, list: actions.payload}
        case 'USER_DETAILS':
            return {...state, details: actions.payload}
    }
    return state
}