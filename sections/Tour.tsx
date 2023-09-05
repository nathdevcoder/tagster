import React from 'react'
import style from './Tour.module.scss'
import Image from 'next/image'
import laptp from '@src/public/laptop.png'
import leaf from '@src/public/leaf.png'

export default function Tour() {
  return (
    <section className={style.Tour}>
        <Image src={laptp} alt='laptop' className={style.TourImg} />
        <Image src={leaf} alt='leaf' className={style.TourLeaf} />
        <div className={style.TourContent}>
            <h3  >LET'S TOUR HOW </h3> 
            <h2 className={'Colored'}>TAGSTER</h2>
            <h3 >WORKS FOR YOU!</h3>
            <p>Users can !CONNECT - like never before | !GIVE - randomly | !RECEIVE - unexpectedly. Locally or Globally. Tagster makes it fun and easy to be friendly and giving, or simply be social to strangers looking to do the same thing. As easy as scan a tag or search a keyword. <span style={{fontWeight:500}}> Press play and enjoy today! </span></p> 
        </div>
    </section>
  )
}
