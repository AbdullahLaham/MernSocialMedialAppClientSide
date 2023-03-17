import Cookies from "js-cookie";

const reducer = (state={
    authData: null,
    loading: false,
    error: false,
    updateLoading: false,
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
            return {...state, authData: null,}
        } 

        case "UPDATING_START": {
            return {...state, updateLoading: true};
        }
        case "UPDATING_SUCCESS": {
            localStorage.setItem('user', JSON.stringify({...action?.payload}))
            return {...state, updateLoading: false, authData: action.payload, error: false};
        }
        case "UPDATING_FAIL": {
            return {...state, updateLoading: false, error: true};
        }

        case "FOLLOW_USER": {
            return {...state, authData: {...state?.authData, followings: [...state?.authData?.followings, action?.payload]}}
        }
        case "UNFOLLOW_USER": {
            return {...state, authData: {...state?.authData, followings: [...state?.authData?.followings?.filter((id) => id !== action?.payload)]}}
        }
        default: {
            return state;
        }

    }

}
export default reducer;