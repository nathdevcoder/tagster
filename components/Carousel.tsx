'use client' 
const Carousel: any = dynamic(() => import('react-spring-3d-carousel') as any, {
  ssr: false
})
import { useState, useEffect } from "react";
import { config } from "react-spring";
import style from './Carousel.module.scss'
import dynamic from "next/dynamic";

export default function Carroussel(props: {cards: any[], offset: any, showArrows:any, }) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<null | any>(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div 
      className={style.Carousel}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
