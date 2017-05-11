/**
 * Created by Walter on 2017/5/9.
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActionCreators from '../actions/postAction';
import PhotoPanel from './PhotoPanel';
import Comment from './Comment';
import {Alert, Col, Row} from "react-bootstrap";

class Single extends React.Component {

    componentWillMount() {
        if(this.props.postsFetched === false) {
            this.props.fetchPosts();
        }
    }

    render() {

        //id of the post
        const requestcode = this.props.params.code;
        //post to find out
        const postIndex = this.props.posts.findIndex(
            (post) => post.code === requestcode
        );
        if(postIndex !== -1) {
            const post = this.props.posts[postIndex];
            return (
                <Row>
                    <Col md={6}>
                        <PhotoPanel post={post} {...this.props}/>
                    </Col>
                    <Col md={6}>
                        <Comment comments={post.comments||[]} {...this.props}/>
                    </Col>
                </Row>
            );
        }else {
            return (
                <Alert bsStyle="danger">
                    <strong>Sorry</strong> 不存在这个博文！
                </Alert>
            );
        }
    }

}





/*Smart Component*/

const mapStateToProps = (state) => {
    return {
        posts: state.get('posts').get('posts').toJS(),
        postsFetched: state.get('posts').get('fetched')
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(postActionCreators, dispatch);
}

const SmartSingle = connect(
    mapStateToProps,
    mapDispatchToProps
)(Single)

export default SmartSingle;