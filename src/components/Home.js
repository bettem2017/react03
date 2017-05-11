/**
 * Created by Walter on 2017/5/9.
 */

import React from 'react';
import {PageHeader} from "react-bootstrap";
import {Link} from "react-router";

class Home extends React.Component {

    render() {

        return (
            <div className="container">
                <PageHeader><Link to="/">React-Redux-Router-Immutable</Link></PageHeader>
                {this.props.children}
            </div>
        );

    }

}

export default Home;