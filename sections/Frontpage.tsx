import React from 'react'
import style from './Frontpage.module.scss'
import Image from 'next/image'
import phone from '@src/public/p5.png'
import home from '@src/public/home.png'
import friend from '@src/public/friend.png'
import grape from '@src/public/grape.png'
import raok from '@src/public/raok.png'
import tags from '@src/public/tags.png'
import feed from '@src/public/feed.png'
import List from '@src/components/List'
export default function Frontpage() {
  return (
    <section className={style.Front}>
            <h3 style={{fontWeight: 800}}>AMAZING FEATURES</h3>
            <div className='Divider'></div>
            <h3 className={'Colored'}>!Connect !Give !Receive</h3>
        <div className={style.FrontContainer}>
            <ul>
                <li><List title='HOME' content='... is where the “NOW” way to socialize starts!' img={home} rev={true}/></li>
                <li><List title='FRIENDS' content='Let’s bring the world closer together. Finding true friends feels like a gift that keeps on giving... Anything is possible with Tagster...' img={friend} rev={true}/></li>
                <li><List title='GRAPEVINE' content='Plant a seed and watch it grow! Kindness is contagious. Gifts bring smiles, but words can lighten up the heart.' img={grape} rev={true}/></li> 
            </ul>
            <Image src={phone} alt='phone'/>
            <ul>
                <li><List title='R.A.O.K' content='Random Acts of Kindness - !CONNECT - like never before !GIVE - randomly !RECEIVE - unexpectedly' img={raok} rev={false}/></li>
                <li><List title='TAGS' content='Once a person joins Tagster, users can scan or enter their vehicle tag numbers or personal tag handle to !Connect with fellow Tagsters' img={tags} rev={false}/></li>
                <li><List title='FEED' content='View, follow, or interact in “Feed Groups” Locally or Globaly. Search / filter vehicle tag number, personal tag handles and so much more to !Connect !Give !Receive' img={feed} rev={false}/></li> 
            </ul>
        </div>
    </section>
  )
}
