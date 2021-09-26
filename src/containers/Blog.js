import React from 'react'
import axios from 'axios'
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import FullPost from '../components/FullPost/FullPost'
import './Blog.css'

 class Blog extends React.Component {
     state = {
         posts:[]
     }
     componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.setState({posts:response.data})
         })
     }
     render () {
         return(
             <div className='blog'>
                 <section>
                    
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