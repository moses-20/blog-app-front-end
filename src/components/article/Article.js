import React,{ useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './article.module.css'
import ReactMarkdown from 'react-markdown'


function Article(props) {
 let history = useHistory()
 const [ article, setArticle ] = useState({})
 const { slug } = useParams()

 useEffect(() => {
  getArticlebySlug(slug)
 }, [slug])

 const getArticlebySlug = async (slug) => {
  try {
   const result = await axios.get(`http://localhost:3101/api/post/${slug}`)
   setArticle(result.data)
  } catch(err) {
   console.log({ error: err })
  }
 }

 const renderMarkdown = () => {
  if(article.markdown === undefined) {
   return (
    <h1> no post body </h1>
   )
  } else {
   return (
    <ReactMarkdown className={styles.markdown} source={article.markdown}/>
   )
  }
 }
 return (
  <div className={styles.article}>
   <button 
    className={styles.return}
    onClick={() => history.push('/read')}
   > Return to all Posts </button>
   <div className={styles.articleInfo}>
    <h3> {article.title} written by {article.author} </h3>
   </div>
   <div className={styles.markdown}>
    {renderMarkdown()}
   </div>
  </div>
 );
}

export default Article;