/**
 * Created by Walter on 2017/5/9.
 */

import posts from '../data/posts';
import comments from '../data/comments';

export function fetchPosts() {
    return function (dispatch) {
        //map comments
        const postsWithComments = posts.map(
            post => ({...post, comments: comments[post.code]})
        );
        dispatch({type: 'POST_RESULT', playload: postsWithComments});
    }
}

export function incrementLike(id) {
    return function (dispatch) {
        dispatch({type: 'POST_LIKE', playload: id});
    }
}