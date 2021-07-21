const initialState = 0;
const loading = false
export const changeCounting = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export const showLoading = (state = loading, action) => {
    switch (action.type) {

        case 'SHOW_LOADING':
            console.log("show loading");
            return true;

        case 'HIDE_LOADING':
            console.log("hide loading");
            return false;

        default:
            console.log("default");
            return false;

    }
}