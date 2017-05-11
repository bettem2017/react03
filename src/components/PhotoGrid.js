/**
 * Created by Walter on 2017/5/9.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActionCreators from '../actions/postAction';
import {Col, Grid, Row} from "react-bootstrap";
import PhotoPanel from './PhotoPanel';

class PhotoGrid extends React.Component {

    componentWillMount() {
        if(this.props.postsFetched === false) {
            this.props.fetchPosts();
        }
    }

    render() {

        const { posts } = this.props;

        const finalResult = [];
        posts.reduce(
            (lastGroup, post) => {
                if(!lastGroup) lastGroup = [];
                if(lastGroup.length===6) {
                    finalResult.push([...lastGroup]);
                    lastGroup = [];
                }else {
                    lastGroup.push(post);
                }
                return lastGroup;
            }, []
        );

        const rows = finalResult.map(
            (postArr, index) => (
                ((postArr) => (
                    <Row key={index}>
                        {
                            (
                                (postArr) => {
                                    return postArr.map(
                                        post => {
                                            return (
                                                <Col md={2} key={post.id}>
                                                    <PhotoPanel post={post} {...this.props} key={post.id}/>
                                                </Col>
                                            );
                                        }
                                    );
                                }
                            )(postArr)
                        }
                    </Row>
                ))(postArr)
            )
        );

        return (
            <div>
                <Grid>
                    {rows}
                </Grid>
            </div>
        );

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

const SmartPhotoGrid = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoGrid)

export default SmartPhotoGrid;
