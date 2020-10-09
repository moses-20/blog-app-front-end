import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './home.module.css'
import read from '../../img/read.jpg'
import write from '../../img/write.jpg'

function Home() {
 let history = useHistory()


 return (
  <main>
   <div className={styles.homeWrap}>
    <div className={styles.homeWrapOverlay}>
      <div className={styles.readWrap} >
        <div className={styles.readPosts}>
          <div className={styles.readImage}>
          <img height='150px' width='300px' src={read} alt='ims' className={styles.iImg}/>
          </div>
          <div className={styles.readTag} onClick={() => history.push('/read')}> read posts </div>
        </div>
      </div>
      <div className={styles.writeWrap} onClick={() => history.push('/write')}>
       <div className={styles.writePosts}>
        <div className={styles.writeImage}>
         <img height='150px' width='300px' src={write} alt='ims' className={styles.iImg}/>
        </div>
        <div className={styles.writeTag}> add post </div>
       </div>
      </div>
    </div>
   </div>
  </main>
 );
}

export default Home;