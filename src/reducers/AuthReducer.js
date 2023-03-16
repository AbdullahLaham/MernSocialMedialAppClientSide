import Cookies from "js-cookie";

const reducer = (state={
    authData: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    loading: false,
    error: false,
}, action) => {

    switch(action?.type) {

        case 'Auth_START' : {
            return {...state, error: false, loading: true,}
        }
           
        case 'Auth_SUCCESS' : {
            localStorage.setItem('user', JSON.stringify(action?.payload));
            return {...state, error: false, loading: false, authData: action?.payload}

        }
        
        case 'Auth_FAIL' : {
            return {...state, error: true, loading: false,}
            
        }
        case "LOG_OUT": {
            localStorage.clear();
            return {...state, authData: {},}
        } 
        default: {
            return state;
        }

    }

}
export default reducer;