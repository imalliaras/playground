import React from 'react';

class Video extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        // console.log(this.props)

        if (!this.props.selectedVideo) {
            return <div></div>;
        }

        const videoId = this.props.selectedVideo.id.videoId;
        const video = this.props.selectedVideo.snippet

		return (
            <div className="card mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <p className="card-text">{video.description}</p>
                </div>
            </div>
            
		);
	}
}

export default Video;