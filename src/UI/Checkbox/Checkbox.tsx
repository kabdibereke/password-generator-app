import React, { SetStateAction, useEffect, useState } from 'react'
import styles from './Checkbox.module.css'
import checkIcon from '../../assets/icon-check.svg'
interface ICheckbox {
    text:string,
    setCharacter: React.Dispatch<SetStateAction<{ upper: boolean; lower: boolean; numbers: boolean; symbols: boolean; }>>,
    character: { upper: boolean; lower: boolean; numbers: boolean; symbols: boolean; };
    tag:string
}

const Checkbox = ({text,setCharacter,character,tag}: ICheckbox) => {
    const [check, setCheck]= useState(false)

    useEffect(()=> {
        setCharacter({...character, [tag]:check })
    },[check])
  return (
    <div className={styles.wrapper} onClick={()=> setCheck(!check)}>
        <div className={check? styles.checkbox_active : styles.checkbox} onClick={()=> setCheck(!check)}>
            {check && <img src={checkIcon} alt="checkIcon" />}
        </div>
        <p className={styles.title}>{text}</p>
    </div>
  )
}

export default Checkbox