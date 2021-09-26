import React from 'react'
import './FullPost.css'


class FullPost extends React.Component {
    render() {
        return(
            <div className='full-post'>
                <h2>Title</h2>
                <p>Content</p>
                <div>
                    <button className='delete'>Delete</button>
                </div>
            </div>
        )
    }
}