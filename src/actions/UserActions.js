
import * as UserApi from '../api/UserApi';

export const updateUser = (userId, userData) => async (dispatch) => {
    dispatch({type: "UPDATING_START",});
    try {
        const {data} = await UserApi.updateUser(userId, userData);
        dispatch({type: "UPDATING_SUCCESS", payload: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "UPDATING_FAIL",});
    }
}
export const followUser = (userId, followedUserId) => async (dispatch) => {
    dispatch({type: "FOLLOW_USER", payload: followedUserId})
    try {
        await UserApi.followUser(userId, followedUserId);
    } catch (error) {
        console.log(error);
    }
}

export const unFollowUser = (userId, followedUserId) => async (dispatch) => {
    dispatch({type: "UNFOLLOW_USER", payload: followedUserId})
    try {
        await UserApi.unFollowUser(userId, followedUserId);
    } catch (error) {
        console.log(error);
    }
}
