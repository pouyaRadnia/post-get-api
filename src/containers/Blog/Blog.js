import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import './Blog.css'



 class Blog extends React.Component {
 
     
     render () {
      
      
         return(
             <div className='blog'>
                 <header>
                     <nav>
                         <ul>
                             <li>
                                 <Link to='/' >Home</Link>
                             </li>
                             <li>
                                 <Link to='/new-post'>New Post</Link>
                             </li>
                         </ul>
                     </nav>
                 </header>
                 <Switch>
                 <Route path='/' exact component={Posts} />
                 <Route path='/new-post' exact component={NewPost} />
                 <Route path='/:id' exact component={FullPost} />
                 </Switch>
             </div>
         )
     }
 }
 export default Blog