import React from 'react'
import 'NewPost.css'

class NewPost extends React.Component {
    state = {
        title:'',
        content:'',
        auther:'Pouya',
    }

    render() {
        return(
            <div>
                <h2>add aPost</h2>
                <label>Title</label>
                <input
                type='text'
                value={this.state.title}
                onChange={(event) =>this.setState({title:event.target.value})}
                />
                <label>Content</label>
                <textarea
                rows='4'
                value={this.state.content}
                onChange={(event) =>this.setState({content:event.target.value})}
                />
                <label>Auther</label>
                <select
                value={this.state.auther}
                onChange={(event)=>this.setState({auther:event.target.value})}
                >
                    <option value='Pouya'>Pouya</option>
                </select>
                <button>Add Post</button>
            </div>
        )
    }
}