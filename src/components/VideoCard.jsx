import React, { Component } from "react";

class VideoCard extends Component {

    render() {
        return (
            <div
                className="video-card card p-3 m-2 m-md-3 m-xl-4 col-6 col-sm-4 col-md-3 col-lg-2 "
                onClick={() => this.props.onSelectTitle(this.props.video.title)}
            >
                <img className="card-img-top" src={this.props.video.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title text-center">{this.props.video.title}</h4>
                </div>
            </div>
        );
    }
}

export default VideoCard;