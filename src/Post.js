
import axios from "axios";
import React, { Component } from 'react';
import 'materialize-css';
import { Button } from 'react-materialize';

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


    post(sub) {
        //https://www.reddit.com/dev/api#POST_api_submit
        this.setState({ loading: true });
        axios.post(`https://www.reddit.com/api/submit`,
            {
                sr: sub,
                title: '',
                kind: (this.state.link !== null) ? 'link' : 'text',
                link: '',
                text: ''
            })
            .then(res => {
                
            })
            .catch(err => {
                console.error(err + " : fetching another sub");
            });
    }

    postAll = e => {
        if (e.target.value === null || this.state.subs.length === 0) {
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
                <input id="title" defaultValue={this.state.title} />
                <label>Link: </label>
                <input id="link" defaultValue={this.state.link} />
                <label>Text: </label>
                <textarea id="message" defaultValue={this.state.body}></textarea>
                <Button className="postAll" onClick={this.postAll} >Post to subs</Button>
            </div>
        );
    }
}

export default Post;