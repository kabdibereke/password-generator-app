import React, { useEffect, useState } from 'react'
import styles from './StrengthMeter.module.css'
import { getLevel } from '../../helpers/helpers';
import Level from '../../UI/Level/Level';
import {  useSelector } from 'react-redux';
import { RootState } from '../../store/store';
type StrengthMeterProps = {
  character: { upper: boolean; lower: boolean; numbers: boolean; symbols: boolean; }
}
const strengthArr= ['too weak', 'weak', 'medium', 'strong']
const StrengthMeter = ({character}: StrengthMeterProps) => {
  const [strengthLevel, setStrengthLevel] =useState(strengthArr[0])
  const {characterLength} = useSelector((state: RootState) => state.counter)

  useEffect(()=> {
    
    let arrBool= Object.values(character)
    let c=0;
    arrBool.forEach((item)=> {
        if(item) {
          c++
        }
    })
    if(characterLength==0 || c==0) {
      setStrengthLevel(strengthArr[0])
    }
    getLevel(c, setStrengthLevel,characterLength,strengthArr)
  },[characterLength,character])

  return (
    <div className={styles.wrapper}>
        <p className={styles.strength}>STRENGTH</p>
        <div className={styles.weak_wrapper}>
            <p className={styles.title}>{strengthLevel}</p>
            <Level strengthLevel={strengthLevel}/>
        </div>
    </div>
  )
}

export default StrengthMeter