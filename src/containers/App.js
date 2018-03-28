import React from 'react';
import UsersList from './UsersList';
import SearchForm from './SearchForm';
import '../app.sass';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            users: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    onChangeHandle(event) {
        this.setState({searchText: event.target.value})
    }
    onSubmit(event) {
        event.preventDefault();
        const {searchText} = this.state;
        const url = `https://api.github.com/search/users?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({users: responseJson.items}));
    }

    render() {
        return (
            <div className="container">
                <SearchForm onSubmit={this.onSubmit} onChangeHandle={this.onChangeHandle} state={this.state}/>
                <UsersList users={this.state.users}/>
            </div>
        );
    }
}

export default App;