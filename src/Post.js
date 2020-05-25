
import axios from "axios";
import React, { Component } from 'react';

class Post extends Component {
    state = {
        subs: [],
        body: '',
        title: '',
        link: '',
        loading: true
    }

    constructor(props) {
        super();
        const subs = this.props.subs;
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

        this.state.subs.each as sub)
        {

        }

    }

    render() {
        const subs = this.state.subs;
        const posts = this.state.subPosts;
        return (
            <div>
                <h1>Posting to {this.state.sub.join(', /r/')}</h1>

                <label>Title: </label>
                <input id="title"  value={link}/>
                <label>Link: </label>
                <input id="link" value={link}/>
                <label>Text: </label>
                <textarea id="message">{body}</textarea>

                <button className="postAll" onClick={postAll}>Post to subs</button>
            </div>
        );
    }
}

export default Post;