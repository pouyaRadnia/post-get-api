import React from 'react'
import './Post.css'

const Post = (props) =>{
    return( <article className='post'>
        <h1>{props.title}</h1>
        <div className='author'>
            <div className='author'>{props.author}</div>
        </div>
    </article>
    )
}
export default Post