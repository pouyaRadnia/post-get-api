import React from 'react'
import axios from 'axios'
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import FullPost from '../components/FullPost/FullPost'
import './Blog.css'

 class Blog extends React.Component {
     state = {
         posts:[],
         selectedPostId:null
     }
    
           
     componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
             const posts = response.data.slice(0 , 4)
             const updatedPost = posts.map((item)=>{
                 return {
                     ...item,
                     author:'pouya'
                 }
             })
             this.setState({posts : updatedPost})
     })
     }
     selectPostHandler = (id) =>{
        this.setState({selectedPostId:id})
     }
     render () {
        const posts= this.state.posts.map((item)=>{
            return <Post
            click={()=>this.selectPostHandler(item.id)}
             key={item.id} 
             title={item.title} 
             author={item.author}/>
        })

         return(
             <div className='blog'>
                 <section>
                    {posts}
                 </section>
                 <section>
                    <FullPost id={this.state.selectedPostId} />
                 </section>
                 <section>
                    <NewPost />
                 </section>
             </div>
         )
     }
 }
 export default Blog