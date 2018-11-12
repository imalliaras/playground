import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.handleSearchInputChange(event.target.value);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        // console.log(event);
        this.props.getSearchResults();
    }

	render() {
        // console.log('Rendering SearchBar');
		return (
            <div className="sticky-top">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3 mt-3">
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.searchTerm}
                            onChange={this.handleChange}
                            placeholder="Search..." />
                        <div className="input-group-append">
                            <button className="btn">Search</button>
                        </div>
                    </div>
                </form>
            </div>
		);
	}
}

export default SearchBar;