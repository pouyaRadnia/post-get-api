import React from 'react'
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import FullPost from '../components/FullPost/FullPost'
import './Blog.css'

 class Blog extends React.Component {
     render () {
         return(
             <div className='blog'>
                 <section>
                    <Post />
                    <Post />
                 </section>
                 <section>
                    <FullPost />
                 </section>
                 <section>
                    <NewPost />
                 </section>
             </div>
         )
     }
 }
 export default Blog