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
    <Carroussel
        cards={cards} 
        offset={2}
        showArrows={false}
      />
    </section>
  )
}
