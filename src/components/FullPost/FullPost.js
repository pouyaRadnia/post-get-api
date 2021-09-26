import React from 'react'
import axios from 'axios'
import './FullPost.css'


class FullPost extends React.Component {
    render() {
        let post = <p style={{textAlign:'center'}}>please select a post</p>
        if (this.props.id){
        post = (
            <div className='full-post'>
                <h2>Title</h2>
                <p>Content</p>
                <div>
                    <button className='delete'>Delete</button>
                </div>
            </div>
        )
        }
        return post
    }
}
export default FullPost