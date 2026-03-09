"use client";

import Image from "next/image";
import styles from "@/app/main.module.css";
import { useState } from "react";

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
        {/* <iamge /> */}
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
      <div>fujita.kohei04@gmail.com</div>
    </div>
  );
}

const SuggestionBox = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count+1)}>
      <div className={styles.suggestBoxNomal}></div>
      <div className={styles.suggestBoxNomal}>{count}</div>
      <div className={styles.suggestBox60}></div>
      <div className={styles.suggestBoxMinus60}></div>
    </button>
  );
}


export default function Home() {
  
  return (
    <div className="flex flex-col items-center m-2">
      <SuggestionBox />
      <main className="flex flex-col gap-10">
        <Thumbnail />
        <AboutMe />
        <Works />
        <Skills />
        <Profill />
        <Contact />
       
      </main>
      
    </div>
  );
}
