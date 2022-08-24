import React, {Component} from 'react';
import axios from 'axios';
    
    
class Posts extends Component {
    constructor() {
        super();
        
        this.state = { posts: [] }
    }
    
    componentDidMount() {
        this.getPosts();
    }
    
    getPosts() {
        axios.get(`http://127.0.0.1:8000/api/posts/`).then(res => {
            const posts = res.data.slice(0,15);
            this.setState({ posts })
        })
    }
    
    render() {
        return (
            <div>
                <section className="row-section">
                    <h5 className="recent-posts">Recent posts:</h5>
                    <div className="container">
                        <div className={'row'}>
                            {this.state.posts.map(post =>
                                <div className="card col-md-5 m-2" key={post.id}>
                                    <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                                    <p className="card-text">{post.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
    
export default Posts;