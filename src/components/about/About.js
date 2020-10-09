import React from 'react'
import Typed from 'react-typed'
import styles from './about.module.css'

function About(props) {
 return (
  <div className={styles.about}>
   <div className={styles.typed}>
    <Typed
     strings={[
     'This is an unofficial MEST Blog',
     'Built and Designed by Moses Gameli',
     'As a Pre-MEST project [Cohort 1]']}
     typeSpeed={100}
     backSpeed={30}
     backDelay={1500}
     loop
    />
   <div className={styles.contact}>
    <h3> mosesgameli20@gmail.com </h3>
    <h4> 0240 695 050 </h4>
   </div>
   </div>
  </div>
 );
}

export default About;