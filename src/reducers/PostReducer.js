const reducer = (state = {
    posts: [], loading: false, error: false, uploading: false,
}, action) => {
    switch (action?.type) {
        case "RETREIVING_SUCCESS": {
            return {...state, posts: action?.payload, error: false, loading: false,}
        }
        case "RETREIVING_START": {
            return {...state, error: false, loading: true,}
        }
        case "RETREIVING_FAIL": {
            return {...state, error: true, loading: false,}
        }
         
        case "UPLOAD_START": {
            return {...state, uploading: true, error: false, }
        }

        case "UPLOAD_SUCCESS": {
            return {...state, uploading: false, error: false, loading: false, posts: [...state?.posts, action?.payload], }
        }

        case "UPLOAD_FAIL": {
            return {...state, uploading: false, error: true, }
        } 
        default: {
            return state;
        }
        // case "UPLOAD_START": {

        // }
        
    }
}
export default reducer;