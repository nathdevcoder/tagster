'use client'
import React from 'react'
import style from './Hero.module.scss'
import Image from 'next/image'
import bg from '@src/public/hero.png'
import front from '@src/public/herofront.png'
import hand from '@src/public/herohand.png'
import logo from '@src/public/herologo.png'
import playstre from '@src/public/playbtn.png'
import apple from '@src/public/applebtn.png'
import { useSpring, animated } from '@react-spring/web'

export default function Hero() {
    const springs = useSpring({
        from: { x: -hand.width, y:hand.height },
        to: { x: 0, y: 0},
      })
  return (
    <header className={style.Hero}>
        <Image src={bg} alt='bg' height={bg.height} width={bg.width} className={style.HeroBackground} />
        <Image src={front} alt='front' height={front.height} width={front.width} className={style.HeroFront} />
        <animated.div 
        className={style.HeroHand}
        style={{ ...springs }} >
            <Image src={hand} alt='hand' height={hand.height} width={hand.width}  /> 
        </animated.div>
        <div className={style.HeroText}>
          <Image src={logo}  alt='logo'/>
          <h4>!Connect  !Give  !Recieve</h4>
          <h3>The <span style={{fontWeight: 800}}>"NOW"</span> way socialize!</h3>
          <div className={style.HeroBtns}>
            <button><Image src={playstre} alt='play store'/></button>
            <button><Image src={apple} alt='apple store'/></button>
          </div>
        </div>
    </header>
  )
}
