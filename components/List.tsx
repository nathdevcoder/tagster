import React from 'react'
import style from './List.module.scss'
import Image from 'next/image'
export default function List({rev=false, img, title, content}: {rev:boolean | undefined, img: any, title: string, content: string}) {
  return (
    <div className={rev? style.ListRev : style.ListRow}>
        <Image src={img} alt='icon'/>
        <div className={ style.ListContent}>
            <h6 className='Colored'>{title}</h6>
            <p>{content}</p>
        </div>
    </div>
  )
}
