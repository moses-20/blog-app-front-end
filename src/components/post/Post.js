import React from 'react'
import moment from 'moment'
import styles from './post.module.css'

function Post({ image, title, description, createdAt, author }) {
 const renderImage = () => {
  if(image === 'undefined') {
   return <img 
    className='placehold' 
    src='https://placehold.it/150'
    alt='placeholder'
   />
  } else {
   return <img src={image} alt='logo' />
  }
 }
 return (
  <div className={styles.postWrap}>
   <div className={styles.img}>
    {renderImage(image)}
   </div>
   <div className={styles.post}>
    <h4> {title} </h4>
    <p> {description} </p>
    <p> {author} </p>
    <p> {moment(createdAt).format('DD/MM/YYYY')} </p>
   </div>
  </div>
 );
}

export default Post;