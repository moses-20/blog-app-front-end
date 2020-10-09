import React, { useState } from 'react';
import axios from 'axios'
import styles from './write.module.css';

function WriteBlog(props) {
  const [ postBody, setPostBody ] = useState({
    author: '',
    title: '',
    description: '',
    markdown: ''
  })

  const handleSubmit = async () => {
    let result = await axios.post(`http://localhost:3101/api/post/new`, {
      author: 'liana ekuadzi',
      title: 'else-titltular',
      description: 'hahahahhahahahahahahahahaa',
      markdown: 'what?!!'
    })
    console.log(result)
  }
  
 return (
  <div className={styles.writeWrap}>
    <h1> Write the blog in <span>markdown syntax</span> </h1>

    <div className={styles.formWrap}>

     <form onSubmit={handleSubmit}>
       <button> Submit Post </button>
      <label>
       <input
       type='text'
       placeholder='author'
       value={postBody.author}
       onChange={e => setPostBody({ author: e.target.value })}
      />
      </label>

      <label>
       <input 
        type='text'
        placeholder='title'
        value={postBody.title}
        onChange={e => setPostBody({ title: e.target.value })}
       />
      </label>
      
      <label>
       <input 
        type='text'
        placeholder='description'
        value={postBody.description}
        onChange={e => setPostBody({ description: e.target.value })}
       />
      </label>

      <textarea
       value={postBody.markdown} 
       className={styles.textBox}
       onChange={e => setPostBody({ markdown: e.target.value })}
      />
     </form>

    </div>

  </div>
 );
}

export default WriteBlog;