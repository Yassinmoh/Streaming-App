import React, { Component } from 'react'

export class SearchBar extends Component {
    state = { term: '' }
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Search Video</label>
                    <input
                        className="field"
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar