import Card from '@src/components/snippets/Card';
import React from 'react'
import p1 from '@src/public/p1.png'
import p2 from '@src/public/p2.png'
import p3 from '@src/public/p3.png'
import p4 from '@src/public/p4.png'
import Carroussel from '@src/components/Carousel';
import style from './How.module.scss'

let cards = [
    {
      key: Math.random(),
      content: (
        <Card imagen={p1} />
      )
    },
    {
      key: Math.random(),
      content: (
        <Card imagen={p2} />
      )
    },
    {
      key: Math.random(),
      content: (
        <Card imagen={p3} />
      )
    },
    {
      key: Math.random(),
      content: (
        <Card imagen={p4} />
      )
    } 
  ];

export default function How() {
  return (
    <section className={style.How}>
      <h3>HOW</h3>
      <div className='Divider'></div>
      <h5 className='Colored'>!Scan and !Connect</h5>
      <p>With so much negativity brought around social media these days, Tagster's goal is to shine a light and bring back the positivity of basic human interaction. Users of this application have the ability to give or receive random acts | words of kindness to people around the world and socialize like NEVER before.<br></br><span> Join today and find out how great social media should be!</span></p>
    <Carroussel
      cards={cards} 
      offset={2}
      showArrows={false}
    />
    </section>
  )
}
