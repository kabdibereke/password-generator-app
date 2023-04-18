import React from 'react'
import styles from './Level.module.css'
type LevelProps = {
    strengthLevel:string
}

const Level = ({strengthLevel}: LevelProps) => {
  return (
    <>
    <div className={strengthLevel=='too weak'? styles.too_weak: strengthLevel=='weak'? styles.weak:strengthLevel=='medium'?styles.medium: styles.strong }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
   
    </>
  )
}

export default Level