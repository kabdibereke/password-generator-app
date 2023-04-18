import React, { useEffect, useState } from 'react'
import styles from './Display.module.css'
import iconCopy from '../../assets/icon-copy.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { shuffleArray } from '../../helpers/helpers'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Display = () => {
  const {password,characterLength} = useSelector((state: RootState) => state.counter)
  const [c, setC] =useState<string[]>([])
  const [b, setB]=useState(characterLength)
 
 useEffect(()=> {
  setC(shuffleArray(password))
  setB(characterLength)
 },[password])

  return (
    <>
      <h1>Password Generator</h1>
      <div className={styles.wrapper}>
        <h2 className={styles.text}>{password.length? c.join('').substring(0,b): 'password'}</h2>
        {password.length!=0 && <CopyToClipboard text={c.join('').substring(0,b)}
          onCopy={()=>toast("Copied")}>
          <img src={iconCopy} alt="iconCopy" className={styles.img} />
        </CopyToClipboard>}
        
      </div>
      <ToastContainer 
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="dark" />
    </>
  )
}

export default Display