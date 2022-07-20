import React, { Component } from 'react';
import VideoCard from './VideoCard';

class CardList extends Component {
    state = {}
    render() {
        return (
            <div className='card-list bg-dark container-fluid'>
                <div className='row justify-content-center py-3 px-lg-5'>
                    {this.props.videos.map(video =>
                        <VideoCard
                            key={video.title}
                            video={video}
                            onSelectTitle={this.props.onSelectTitle}
                        />
                    )}
                </div>



            </div>
        );
    }
}

export default CardList;