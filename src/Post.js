
import axios from "axios";
import React, { Component } from 'react';

class Post extends Component {

    constructor(props = []) {
        super(props);
        this.state = {
            subs: props.subs,
            body: '',
            title: '',
            link: '',
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ subPosts: [] });
    }


    post() {
        this.setState({ loading: true });
        axios.get(`https://www.reddit.com/r/${this.state.sub}.json`).then(res => {
            this.setState({ subPosts: res.data.data.children.map(obj => obj.data), loading: false });
        }).catch(err => {
            console.error(err + " : fetching another sub");
        });
    }

    postAll = e => {
        if (e.target.value == null || this.state.subs.length == 0) {
            return;
        }

        this.state.subs.forEach((sub) => {
        });
    }

    render() {
        const subs = this.state.subs;
        return (
            <div>
                <h1>Posting to {subs}</h1>
                <label>Title: </label>
                <input id="title" value={this.state.title} />
                <label>Link: </label>
                <input id="link" value={this.state.link} />
                <label>Text: </label>
                <textarea id="message">{this.state.body}</textarea>
                <button className="postAll" onClick={this.postAll}>Post to subs</button>
            </div>
        );
    }
}

export default Post;