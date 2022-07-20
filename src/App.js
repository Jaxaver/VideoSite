import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';
import CardList from './components/CardList';


class App extends Component {
  state = {
    hasSelectedVideo: false,
    selectedTitle: "video2",
    videos: [
      { title: "gopro sierra", url: "https://www.youtube.com/watch?v=rWv0_CHSgSE", imageUrl: "http://i3.ytimg.com/vi/rWv0_CHSgSE/hqdefault.jpg", comments: [], related: ["gopro boat", "gopro everest"] },
      { title: "gopro boat", url: "https://www.youtube.com/watch?v=jJZ69vfF7i0", imageUrl: "http://i3.ytimg.com/vi/jJZ69vfF7i0/hqdefault.jpg", comments: [], related: ["gopro sierra", "gopro everest"] },
      { title: "gopro everest", url: "https://www.youtube.com/watch?v=99ryMHWuhtM", imageUrl: "http://i3.ytimg.com/vi/99ryMHWuhtM/hqdefault.jpg", comments: [], related: ["gopro sierra", "gopro boat"] },
      { title: "recipe shakshuka", url: "https://www.youtube.com/watch?v=m5Kn9WmOCrw", imageUrl: "http://i3.ytimg.com/vi/m5Kn9WmOCrw/hqdefault.jpg", comments: [], related: ["recipe egg rolls", "recipe mugcake"] },
      { title: "recipe mugcake", url: "https://www.youtube.com/watch?v=H3OhTEkNbgU", imageUrl: "http://i3.ytimg.com/vi/H3OhTEkNbgU/hqdefault.jpg", comments: [], related: ["recipe shakshuka", "recipe egg rolls"] },
      { title: "recipe egg rolls", url: "https://www.youtube.com/watch?v=Nzo9AkPYw6c", imageUrl: "http://i3.ytimg.com/vi/Nzo9AkPYw6c/hqdefault.jpg", comments: [], related: ["recipe shakshuka", "recipe mugcake"] },
      { title: "the last human", url: "https://www.youtube.com/watch?v=LEENEFaVUzU", imageUrl: "http://i3.ytimg.com/vi/LEENEFaVUzU/hqdefault.jpg", comments: [], related: ["alien horror", "the final border"] },
      { title: "alien horror", url: "https://www.youtube.com/watch?v=xAUJYP8tnRE", imageUrl: "http://i3.ytimg.com/vi/xAUJYP8tnRE/hqdefault.jpg", comments: [], related: ["the last human", "the final border"] },
      { title: "the final border", url: "https://www.youtube.com/watch?v=uzkD5SeuwzM", imageUrl: "http://i3.ytimg.com/vi/uzkD5SeuwzM/hqdefault.jpg", comments: [], related: ["the last human", "alien horror"] }

    ]
  };

  

  handleAddComment = (comment, videoName, user) => {
    console.log("her we gooooOoo0o", comment, videoName, user)
    const videos = [...this.state.videos]
    const video = videos.filter( v => v.title === videoName )[0]
    //const index = videos.indexOf(video)
    const forgedKey = videoName.concat(video.comments.length, user)

    video.comments.push([user, comment, forgedKey])
    //videos[index] = video

    console.log("tis a video", forgedKey)
    this.setState({videos})
  }

  checkIfVideoSelected() {
    let { hasSelectedVideo } = this.state
    if (!hasSelectedVideo) {
      return <CardList 
        videos={this.state.videos} 
        onSelectTitle={this.handleSelectTitle}
      />
    } else return (<Player 
      videos={this.state.videos}
      video={this.state.videos.find(video => video.title === this.state.selectedTitle)}
      onAddComment={this.handleAddComment}
      onSelectTitle={this.handleSelectTitle}

      />)
  }

  handleSelectTitle = videoTitle => {
    const selectedTitle = videoTitle
    this.setState({hasSelectedVideo: true})
    this.setState({selectedTitle})
    
  }

  handleUnselectTitle = () => {
    const selectedTitle = "none-selected"
    this.setState({hasSelectedVideo: false})
    this.setState({selectedTitle})
  }



  render() {
    return (
      <React.Fragment>
        <Navbar 
          onUnselectTitle={this.handleUnselectTitle}
        />
        {this.checkIfVideoSelected()}

      </React.Fragment>

    );
  }
}

export default App;

