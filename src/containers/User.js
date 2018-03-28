import React from 'react';

class User extends React.Component {
    render(){
        return(
            <div className="users__user">
                <img src={this.props.user.avatar_url} alt="avatar" className="users__img"/>
                <a href={this.props.user.html_url} target="_blank" className="users__link">{this.props.user.login}</a>
            </div>
        )
    }
}

export default User;