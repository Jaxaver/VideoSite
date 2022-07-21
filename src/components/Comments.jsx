import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CommentForm from './CommentForm';


class Comments extends Component {
    state = {
        commentsVisible: false,
    }

    hideComments = () => {
        console.log("first is", this.state.commentsVisible)
        this.setState({ commentsVisible: false })
        console.log("then after function", this.state.commentsVisible)
    }

    showComments = () => {
        console.log("first is", this.state.commentsVisible)

        this.setState({ commentsVisible: true })
        console.log("then after function", this.state.commentsVisible)
    }

    render() {
        return (
            <span>
                <button onClick={() => this.hideComments()}>hide comments</button><button onClick={() => this.showComments()}>show comments</button>
                {
                    this.state.commentsVisible && <div className='container px-5  pb-5 bg-black border-top border-light text-white '>
                        <h3 className='pt-4 pl-5 bg-secondary text-center pb-4'><u>Comments:</u></h3>
                        <CommentForm {...this.props} />

                        <ul>{this.props.video.comments.map((comment, index) =>
                            <span key={comment[2]}>
                                <h5>{comment[0]}:</h5>
                                <p>{comment[1]}</p>
                            </span>
                        )}</ul>

                    </div>
                }

            </span>



        );
    }
}

export default Comments;