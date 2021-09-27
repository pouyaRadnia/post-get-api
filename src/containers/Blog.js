import React from 'react'
import axios from 'axios'
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import FullPost from '../components/FullPost/FullPost'
import './Blog.css'

 class Blog extends React.Component {
     state = {
         posts:[],
         selectedPostId:null,
         error:false,
         
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
     .catch((err)=>{
        this.setState({error : true})
     })
     }
     selectPostHandler = (id) =>{
        this.setState({selectedPostId:id})
     }
     render () {
         let posts=<p style={{textAlign:'center'}}>Fetching data failed</p>
         if(!this.state.error){
             posts= this.state.posts.map((item)=>{
                return(
                     <Post
                click={()=>this.selectPostHandler(item.id)}
                 key={item.id} 
                 title={item.title} 
                 author={item.author}
                 />
                )
            })
         }
      
         return(
             <div className='blog'>
                 <header>
                     <nav>
                         <ul>
                             <li>
                                 <a href='/'>Home</a>
                             </li>
                             <li>
                                 <a href='/new-post'>New Post</a>
                             </li>
                         </ul>
                     </nav>
                 </header>
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