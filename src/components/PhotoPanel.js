/**
 * Created by Walter on 2017/5/11.
 */
import React from 'react';
import {Button, Thumbnail} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class PhotoPanel extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.incrementLike(this.props.post.id);
    }

    render() {

        const { post } = this.props;

        return (

            <Thumbnail src={post.display_src} alt={post.caption}>
                <Link to={`/view/${post.code}`}><h5>{post.caption}</h5></Link>
                <p className="text-center">
                    <Button bsStyle="default" onClick={this.handleClick}>
                        喜欢&nbsp;{post.likes}
                    </Button>&nbsp;
                    <Button bsStyle="default">
                        <FontAwesome name='comment' />&nbsp;{post.comments? post.comments.length : ''}
                    </Button>
                </p>
            </Thumbnail>
        );

    }


}

export default PhotoPanel;