import * as PostApi from '../api/PostApi'

// getTimeLinePosts

export const getTimeLinePosts = (userId) => async (dispatch) => {
    dispatch({type: "RETREIVING_START",});
    try {
        // await ShareApi.getTimeLinePosts(imageData)
        const {data} = await PostApi.getTimeLinePosts(userId);
        dispatch({type: "RETREIVING_SUCCESS", payload: data,})
    } catch (error) {
        dispatch({type: "RETREIVING_FAIL",});
        console.log(error)
    }
}


// like post 

export const likePost = (postId, userId) => async (dispatch) => {
    const {data} = await PostApi.likePost(postId, userId);
}
