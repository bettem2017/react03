/**
 * Created by Walter on 2017/5/8.
 */
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    fetching: false,
    fetched: false,
    posts: [],
    error: null,
});
const postReducer = (state= initialState, action) => {
    switch (action.type) {
        case "POST_FETCH": {
            return state.set('fetching', true);
        }
        case "POST_RESULT": {
            return state.merge({'posts': Immutable.fromJS(action.playload), 'fetched': true});
        }
        case "POST_LIKE": {
            const id = action.playload;
            let posts = state.get('posts');

            let newPosts = posts.map((post) => {

                if(parseInt(post.get('id'), 10) === parseInt(id, 10)) {
                   return post.set('likes', post.get('likes')+1);
                }
                return post;
            });
            return state.set('posts', newPosts);
        }
        case "POST_ERROR": {
            return state.merge({
                fetching: false, error: Immutable.fromJS(action.playload)
            });
        }
        default:
            break;
    }
    return state;
}

export default postReducer;