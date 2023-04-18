import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import Slider from '../../UI/Slider/Slider'
import Checkbox from '../../UI/Checkbox/Checkbox'
import StrengthMeter from '../StrengthMeter/StrengthMeter'
import { alphabetArray, checkboxArray, numbersArray, symbolsArray, uppercaseAlphabetArray } from '../../utils/utils'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { clearPassword, setPassword } from '../../store/slice/slice'



const Main = () => {
  const {characterLength} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  const [character, setCharacter]=useState({
    upper: false,
    lower:false,
    numbers:false,
    symbols:false
  })
  
  const handleClick=()=> {
    dispatch(clearPassword())
    if(character.upper) {
      dispatch(setPassword(uppercaseAlphabetArray))
      
    }
    if(character.lower) {
      dispatch(setPassword(alphabetArray))
      
    }
    if(character.numbers) {
      dispatch(setPassword(numbersArray))
      
    }
    if(character.symbols) {
      dispatch(setPassword(symbolsArray))
    
    }

  }
  return (
    <div className={styles.wrapper}>
            <Slider />
            {checkboxArray.map(item=> {
              return  <Checkbox key={item.tag} text={item.text} setCharacter={setCharacter} character={character} tag={item.tag}/>
            })}
            <StrengthMeter character={character} />
            <button className={characterLength!=0? styles.btn: styles.btn_disabled} onClick={handleClick}>generate</button>
    </div>
  )
}

export default Main