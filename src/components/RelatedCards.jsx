import React, { Component } from 'react';
import VideoCard from './VideoCard';


class RelatedCards extends Component {
    state = {}
    

    findRelatedVideos = () => {
        let relTitles = this.props.video.related
        let relVideos = this.props.videos.filter(vid =>
            relTitles.includes(vid.title)
        )
        console.log(relVideos)
        return relVideos
    }

    render() {
        return (<div className='card-list bg-dark container-fluid'>
            
            <div className='row justify-content-center py-3 px-lg-5'>
                <h4 className='text-light'>You might also like:</h4>
                {console.log(this.findRelatedVideos())}
                {this.findRelatedVideos().map(video =>
                    <VideoCard
                        key={video.title}
                        video={video}
                        onSelectTitle={this.props.onSelectTitle}
                    />
                )}
            </div>
        </div>)
    }
}

export default RelatedCards;