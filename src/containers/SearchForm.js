import React from 'react';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <form className="search-form" onSubmit={event => this.props.onSubmit(event)}>
                <label className="search-form__label" htmlFor="searchForm">Search by user name</label>
                <input type="text"
                       id="searchText"
                       onChange={event => this.props.onChangeHandle(event)}
                       value={this.props.state.searchText}
                       className="search-form__input"/>
            </form>
        )
    }
}

export default SearchForm