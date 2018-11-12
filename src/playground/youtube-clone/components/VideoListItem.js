import React from 'react';

class VideoListItem extends React.Component {
	constructor(props) {
        super(props);
        // console.log('props', props.video);
        // this.handleClick = this.handleClick.bind(this, props.video);
    }
    
    handleClick(video) {
        console.log('video', video)
        this.props.handleVideoSelect(video);
    }

	render() {
        // console.log('props', this.props);
        const video = this.props.video.snippet;
		return (
            <li className="media mb-4" onClick={this.handleClick.bind(this, this.props.video)}>
                <img className="mr-3" src={video.thumbnails.medium.url} />
                <div className="media-body">
                    <h5 className="mt-0 mb-1">{video.title}</h5>
                    <p>{video.description}</p>
                </div>
            </li>
		);
	}
}

export default VideoListItem;