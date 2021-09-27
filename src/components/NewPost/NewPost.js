import React from 'react'
import axios from 'axios'
import './NewPost.css'

class NewPost extends React.Component {
    state = {
        title:'',
        content:'',
        auther:'Pouya',
    }
    postDataHandler = () =>{
        const data = {
            title:this.state.title,
            body:this.state.content,
            auther:this.state.auther,
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then((response)=>{
            console.log(response)
        })
    }

    render() {
        return(
            <div className='new-post'>
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
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        )
    }
}
export default NewPost