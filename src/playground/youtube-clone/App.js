import React from 'react';
import ReactDOM from 'react-dom';
import searchYoutube from 'youtube-api-v3-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import Video from './components/Video';
import 'bootstrap/dist/css/bootstrap.min.css'

const API_KEY = 'AIzaSyCIVcQW4xX5G8j5rmZ6a0XnaMDWb_eUbOQ';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
		this.getSearchResults = this.getSearchResults.bind(this);
		this.handleVideoSelect = this.handleVideoSelect.bind(this);
		this.state = { searchTerm: '', videos: [], selectedVideo: undefined };
	}

	handleSearchInputChange(value) {
		this.setState({ searchTerm: value });
	}

	async getSearchResults() {
		console.log(`Initiated search with keyword "${this.state.searchTerm}", getting results...`);

		const options = {
			q: this.state.searchTerm,
			part: 'snippet',
			type: 'video'
		};
		
		try {
			let result = await searchYoutube(API_KEY, options);
			this.setState({ videos: result.items, selectedVideo: undefined });
		} catch(error) {
			throw new Error(error);
		}
		
	}

	handleVideoSelect(video) {
		// console.log('handleVideoSelect', video)
		this.setState({ selectedVideo: video});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<SearchBar handleSearchInputChange={this.handleSearchInputChange} getSearchResults={this.getSearchResults} />
						{this.state.selectedVideo && 
							<Video selectedVideo={this.state.selectedVideo} />
						}
						<VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;