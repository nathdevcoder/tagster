import React from 'react'
import style from './Frontpage.module.scss'
import Image from 'next/image'
import phone from '@src/public/p5.png'
export default function Frontpage() {
  return (
    <section className={style.Front}>
        <div className={style.FrontContainer}>
            <ul>
                <li>
                    <div>
                        <p></p>
                    </div>
                </li>
            </ul>
            <Image src={phone} alt='phone'/>
        </div>
    </section>
  )
}
