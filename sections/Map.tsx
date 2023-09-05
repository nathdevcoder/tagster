import Image from 'next/image'
import style from './Map.module.scss'
import ph from '@src/public/p6.png'

import React from 'react'

export default function MapSection() {
  return (
    <section className={style.Map} > 
      <div className={style.MapContent}>
        <h3 style={{fontWeight: 800}}>MAP OF POSITIVITY</h3>
        <div className='Divider'></div>
        <h3 className={'Colored'}>Grapevine</h3>
        <p>Users can start with a R.A.O.K., then they can grow their grapevine and watch it spread locally and even better, when it spreads around the world where socializing and positivity has spread in the form of <span style={{fontWeight:500}}>Random Acts of Kindness.</span>  “Super cool, right?!” </p> 
      </div>
      <Image src={ph} alt='phone' className={style.MapImg}/>
    </section>
  )
}
