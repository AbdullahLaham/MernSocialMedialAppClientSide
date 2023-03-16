import * as ShareApi from '../api/ShareApi'

// upload image 
export const uploadImage = (imageData) => async (dispatch) => {
    try {
        await ShareApi.uploadImage(imageData)
    } catch (error) {
        console.log(error)
    }
}

// upload post

export const uploadPost = (postData) => async (dispatch) => {
    try {
        dispatch({type: "UPLOAD_START"});
        const {data} = await ShareApi.uploadPost(postData);
        dispatch({type: "UPLOAD_SUCCESS", payload: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "UPLOAD_FAIL"});
    }
}


