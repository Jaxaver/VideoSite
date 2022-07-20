import React, { Component } from "react";
import ReactPlayer from "react-player";
import Comments from "./Comments";
import RelatedCards from "./RelatedCards";
import VideoCard from "./VideoCard";

class Player extends Component {
    state = {}



    render() {
        return (
            <div
                className="bg-dark"
            >
                <h2 className="text-center py-2 bg-secondary text-light">{this.props.video.title}</h2>
                <div className="player-wrapper">

                    <ReactPlayer
                        className='react-player'
                        url={this.props.video.url}

                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
                <RelatedCards
                    video={this.props.video}
                    videos={this.props.videos}
                    onSelectTitle={this.props.onSelectTitle}

                />
                <Comments
                    video={this.props.video}
                    onAddComment={this.props.onAddComment}

                />
            </div>



        );
    }
}

export default Player;