import React, { SetStateAction, useEffect, useState } from 'react'
import styles from './Slider.module.css'
import { useDispatch } from 'react-redux'

import { setCharacterLength } from '../../store/slice/slice'


const Slider = () => {
  const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    useEffect(()=> {
      dispatch(setCharacterLength(value))
    },[value])
  return (
    <>
    <div className={styles.text__wrapper}>
        <p className={styles.title}>Character Length</p>
        <p className={styles.value}>{value}</p>
    </div>
    <input
        className={styles.input}
        type="range"
        min="0"
        max="20"
        value={value}
        onChange={(e)=> setValue(+e.target.value)}
      />
    </>
  );
  
}

export default Slider