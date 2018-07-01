import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <div className="Search">
                
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
                    <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                    <input className="mdl-textfield__input" type="text" id="search-field" />
                </div>
                
            </div>
        );
    }
}

export default Search;