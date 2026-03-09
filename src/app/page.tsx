"use client";

import Image from "next/image";
import styles from "@/app/main.module.css";
import { useState } from "react";

import GMK1 from "@/app/images/gomoku1.png";
import GMK2 from "@/app/images/gomoku2.png";
import GMK3 from "@/app/images/gomoku3.png";


const Thumbnail = () => {
  return (
    <div className={styles.thumbnailTitle}>
      <div className="flex flex-col justify-center">
        <div className="text-6xl font-bold">Welcom</div>
        <div className="">to 藤's house</div>
      </div>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div>
      <div className="text-5xl">About Me</div>
      <div>福井県出身。福井大学 工学部 電気電子情報工学科に所属。</div>
      
    </div>
  );
}

const Works = () => {
  return (
    <div>
      <div className="text-5xl">Works</div>
      <div>
        <Work />
      </div>
    </div>
  );
}

const Work = () => {
  const [imgNum, setImgNum] = useState(0);
  return (
    <div className={styles.workImages}>
      
      <div className={styles.imageFlame}>
        {imgNum === 0 && <Image src={GMK1} alt="制作物：五目並べの簡単な例"/>}
        {imgNum === 1 && <Image src={GMK2} alt="制作物：五目並べの勝利例"/>}
        {imgNum === 2 && <Image src={GMK3} alt="制作物：五目並べのライトモード例"/>}
      </div>
      <div className={styles.workChanger}>
        <button onClick={() => setImgNum((imgNum+2)%3)}>＜</button>
        <button onClick={() => setImgNum((imgNum+1)%3)}>＞</button>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div>
      <div className="text-5xl">Skills</div>
      <div className="flex flex-row gap-3">
        <div>
          <div className="text-3xl">履修言語</div>
          <div>
            <div>C言語</div>
            <div>Python</div>
            <div>Java</div>
            <div>HTML/CSS</div>
            <div>JavaScript</div>
          </div>
        </div>
        <div>
          <div className="text-3xl">履修ライブラリ</div>
          <div>
            <div>React</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Profill = () => {
  return (
    <div>
      <div className="text-5xl">Profill</div>
      <div>爆誕</div>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <div className="text-5xl">Contact</div>
      <a href="mailto:fujita.kohei04@gmail.com">fujita.kohei04@gmail.com</a>
    </div>
  );
}




export default function Home() {
  
  return (
    <div className="flex flex-col items-center m-2">
      <main className="flex flex-col gap-10">
        <section id="thumbnail">
          <Thumbnail />
        </section>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="profill">
          <Profill />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
    </div>
  );
}
