import React from 'react'
import style from './Foot.module.scss'
import Image from 'next/image'
import playstre from '@src/public/playbtn.png'
import apple from '@src/public/applebtn.png'
import logo from '@src/public/logo.png'
export default function Foot() {
  return (
    <footer className={style.Foot}>
        <div className={style.FootText}> 
          <p>Download for FREE</p>
          <Image src={logo} alt='logo' width={345} height={74}/>
          <p>!Connect !Give !Receive</p> 
          <div className={style.FootBtns}>
            <button><Image src={playstre} alt='play store'/></button>
            <button><Image src={apple} alt='apple store'/></button>
          </div>
        </div>
        <div className={style.FootShoe}><p>2021 Tagster, All rights reserved, Terms Of Service & Privacy Policy</p></div>
    </footer>
  )
}
