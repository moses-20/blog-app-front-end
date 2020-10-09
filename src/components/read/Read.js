import React, {useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './read.module.css'
import Post from '../post/Post'

function ReadBlog() {
  let history = useHistory()
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      const result = await axios.get('http://localhost:3101/api/post') 
      setPosts(result.data.reverse())
    } catch (err) {
      console.log({error: err})
    }
  }

 const renderPost = () => {
   if(posts.length === 0) {
     return <h1 className={styles.load}> loading </h1>
   } else {
     return posts.map((post) => (
       <div
        key={post._id}
        className={styles.readChild}
        onClick={() => history.push(`/read/${post.slug}`)}
       >
        <Post
          image={post.image}
          title={post.title}
          author={post.author}
          description={post.description}
          createdAt={post.createdAt}
        />
       </div>
     ))
   }
 }
 return (
   <div className={styles.readWrap}>
      {renderPost()}
   </div>
 );
}

export default ReadBlog;