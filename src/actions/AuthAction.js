import * as AuthApi from '../api/AuthApi';

export const signIn = (formData) => async (dispatch) => {
    dispatch({type: "Auth_START"});
    try {
        console.log('signin', formData)
        const {data} = await AuthApi.logIn(formData);
        dispatch({type: "Auth_SUCCESS", payload: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "Auth_FAIL"});
    }
}

export const signUp = (formData) => async (dispatch) => {
    console.log('signup');
    dispatch({type: "Auth_START"});
    try {
        console.log('signup', formData);
        const {data} = await AuthApi.signUp(formData);
        dispatch({type: "Auth_SUCCESS", payload: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "Auth_FAIL"});
    }
}


// export const logOut = (formData) => async (dispatch) => {
//     console.log('signup');
//     dispatch({type: "Auth_START"});
//     try {
//         console.log('signup', formData);
//         const {data} = await AuthApi.signUp(formData);
//         dispatch({type: "Auth_SUCCESS", payload: data});
//     } catch (error) {
//         console.log(error);
//         dispatch({type: "Auth_FAIL"});
//     }
// }





