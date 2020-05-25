import React, { Component } from 'react';

class Config extends Component {
    constructor() {
        super();

        this.setState({ token: '' });
    }

    setToken = e =>  {
        if(e.target.value === null)
        {
            return
        }
        this.setState({ token: this.state.token });
    }


    render() {
        const token  = this.state.token;
        return (
            <div>
                <label>Token: </label>
                <input id="token" defaultValue={token} onblur={setToken}/>
            </div>
        );
    }
}

export default Config;