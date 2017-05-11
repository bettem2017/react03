/**
 * Created by Walter on 2017/5/11.
 */
import React from 'react';

class Comment extends React.Component {

    render() {

        const comments = this.props.comments;
        const commentLis = comments.map(
            (comment, index) => <li key={index}>{comment.user}@${comment.text}</li>
        );
        return (
            <ul>{commentLis}</ul>
        );
    }
}


export default Comment;
