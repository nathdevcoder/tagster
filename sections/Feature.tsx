import React from 'react'
import style from './Feature.module.scss'

export default function Feature() {
  return (
    <>
    <section className={style.FeatOne} > 
      <div className={style.FeatOneContent}>
        <h3 style={{fontWeight: 800}}>MESSAGE GLOBALLY</h3>
        <div className='Divider'></div>
        <h3 className={'Colored'}>!CONNECT</h3>
        <p>Users have the ability to <span style={{fontWeight:500}}>!CONNECT !GIVE !RECEIVE</span> with people from around the world, “Random Acts Of Kindness”, start conversations and sharing media are just a few things to do with Tagster. Search a vehicle license tag or personal handle and <span style={{fontWeight:500}}>!CONNECT today!</span></p> 
      </div>
    </section>
    <section className={style.FeatTwo}  > 
      <div className={style.FeatTwoContent}>
        <h3 style={{fontWeight: 800}}>LET'S BE SOCIAL</h3>
        <div className='Divider'></div>
        <h3 className={'Colored'}>Tagster Social</h3>
        <p>A blend of everything you love and are familiar with using from other social apps but without all the negativity that surrounds them. <span style={{fontWeight:500}}>It's time to be a part of something greater!</span></p> 
      </div>
    </section>
    </>

  )
}
