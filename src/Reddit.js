
import axios from "axios";
import React, { Component } from 'react';
import 'materialize-css';
import { Button, Icon } from 'react-materialize';

class Reddit extends Component {
    constructor() {
        super();

        const subs = ['java', 'javascript', 'php', 'csharp', 'react'];

        this.state = {
            subs: subs,
            subPosts: [],
            sub: '',
            loading: true
        }

        this.state.sub = this.getRandomSub(subs);
    }

    getRandomSub(subs) {
        return subs[Math.floor(Math.random() * subs.length)]
    }

    componentDidMount() {
        this.setState({ subPosts: [] });
        this.fetchSub();
    }

    fetchSub() {
        this.setState({ loading: true });
        axios.get(`https://www.reddit.com/r/${this.state.sub}.json`).then(res => {
            this.setState({ subPosts: res.data.data.children.map(obj => obj.data), loading: false });
        }).catch(err => {
            console.error(err + " : fetching another sub");
            this.getRandomSub(this.state.subs);
            this.fetchSub();
        });
    }

    changeSubs = e => {
        if (e.target.value == null) {
            return;
        }

        const subs = e.target.value.split(',');
        this.setState({ subs: subs, sub: this.getRandomSub(subs) });

        this.fetchSub();
    }

    getList(posts) {
        if (this.state.loading) {
            return <div> Loading ... </div>;
        }

        return (   
            <div class="row">
                {posts.map(post => {
                    return (
                        <>
                        <div className="col s10">
                            <a href={`${post.url}`}>{post.title}</a> - by <a target="_blank" rel="noopener noreferrer" href={`https://reddit.com/u/${post.author}`}>{post.author}</a>
                        </div>
                        <div className="col s2">
                            <Icon tiny>insert_chart</Icon>
                        </div>
                        </>
                    );
                })}
            </div>
        );
    }

    render() {
        const subs = this.state.subs;
        const posts = this.state.subPosts;
        return (
            <div>
                <label>SubReddits: </label>
                <input id="sublist" onBlur={this.changeSubs} defaultValue={subs.join(',')} />
                <Button onClick={this.changeSubs} defaultValue="Refresh">Refresh</Button>
                <h1>/r/{this.state.sub}</h1>
                {this.getList(posts)}
            </div>
        );
    }
}

export default Reddit;