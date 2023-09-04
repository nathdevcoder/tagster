'use client'
import Styles from "./Card.module.scss";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring"; 
import Image from "next/image";

function Card({ imagen }: {imagen: any }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.05)" : "scale(1)", 
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
       <Image  src={imagen} alt='' />
    </animated.div>
  );
}

export default Card;
