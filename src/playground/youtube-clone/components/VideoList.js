import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component {
	constructor(props) {
        super(props);
    }
    
	render() {
        // console.log('props', this.props)
        const videos = this.props.videos;
        // console.log(videos);
        if (!videos.length) {
            return <div>No videos searched yet</div>
        }

        const videoListArr = videos.map((video, index) => {
            return <VideoListItem key={index} video={video} handleVideoSelect={this.props.handleVideoSelect}></VideoListItem>;
        });
        
		return (
            <ul className="list-unstyled">
                {videoListArr}
            </ul>
		);
	}
}

export default VideoList;