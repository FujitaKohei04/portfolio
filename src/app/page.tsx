"use client";

import Image, { StaticImageData } from "next/image";
import styles from "@/app/main.module.css";
import { useState } from "react";

import GMK1 from "@/app/images/works/gomoku/gomoku1.png";
import GMK2 from "@/app/images/works/gomoku/gomoku2.png";
import GMK3 from "@/app/images/works/gomoku/gomoku3.png";

import PT1 from "@/app/images/works/PT/PTdef.png";
import PT2 from "@/app/images/works/PT/PTworking.png";
import PT3 from "@/app/images/works/PT/PTrestiong.png";


type WorkContent = {
  workName: string;
  workDescription: string;
  examples: {
    img: StaticImageData;
    description: string;
  }[];
}

const WORKS: WorkContent[] = [
  {
    workName: "五目並べ",
    workDescription: "ローカル用五目並べ。〇側と✕側のマークに分かれ、盤面上に「縦」「横」「斜め」のいずれかに対し、先にマークを５つ並べたほうが勝ち。Next.jsを用いて実装。",
    examples: [
      {
        img: GMK1,
        description: "簡単な例",
      },
      {
        img: GMK2,
        description: "簡単な例",
      },
      {
        img: GMK3,
        description: "簡単な例",
      },
    ],
  },
  {
    workName: "ポモドーロタイマー",
    workDescription: "ローカル用五目並べ。〇側と✕側のマークに分かれ、盤面上に「縦」「横」「斜め」のいずれかに対し、先にマークを５つ並べたほうが勝ち。Next.jsを用いて実装。",
    examples: [
      {
        img: PT1,
        description: "簡単な例",
      },
      {
        img: PT2,
        description: "簡単な例",
      },
      {
        img: PT3,
        description: "簡単な例",
      },
    ],
  },
  {
    workName: "五目並べ",
    workDescription: "ローカル用五目並べ。〇側と✕側のマークに分かれ、盤面上に「縦」「横」「斜め」のいずれかに対し、先にマークを５つ並べたほうが勝ち。Next.jsを用いて実装。",
    examples: [
      {
        img: GMK1,
        description: "簡単な例",
      },
      {
        img: GMK2,
        description: "簡単な例",
      },
      {
        img: GMK3,
        description: "簡単な例",
      },
    ],
  },
];

const IMG_NUM = 3;


const Thumbnail = () => {
  return (
    <div className={styles.thumbnailTitle}>
      <div className="flex flex-col justify-center gap-4">
        <div className="text-6xl">うぇるかむ</div>
        <div>
          <div>Fujita Kohei</div>
          <div>福井大学所属</div>
        </div>
        
      </div>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div>
      <div className="text-5xl">About Me</div>
      <div>福井県出身で、福井大学 工学部 電気電子情報工学科に所属。
      アニメや漫画を見たり、お絵描きをするのが趣味。最近は料理にハマっている。
      
        そばやそうめんが好きで、３食同じでも飽きない。めんつゆは、
        <a href="https://www.yamamori.co.jp/products/sonomama_somen_500/" target="_blank" className={styles.soumenSource}>
          これ
        </a>
        一択。
      </div>
      <div className={styles.supplement}>このヤマモリのそうめんつゆに、青ネギを多めに入れて、刻みのりをパラっとかけて、最高のめんつゆの完成。もし飽きたら、卵を投下してみたり、ごま油をいれてみたり、わさびをちょっと混ぜてみたり、いろいろな楽しみ方がある。沼。</div>
    </div>
  );
}

const Works = () => {
  return (
    <div>
      <div className="text-5xl">Works</div>
      <div>
        <Work workContents={WORKS}/>
      </div>
    </div>
  );
}

const Work = ({workContents}:{workContents: WorkContent[]}) => {
  const [workNum, setWorkNum] = useState(0);
  const [works, setWorks] = useState<WorkContent[]>(workContents);
  const [imgNum, setImgNum] = useState(0);

  const [isShowWorkDetail, setIsShowWorkDetail] = useState(false);

  const workOnClicked = (index: number) => {
    setWorkNum(index);
    setIsShowWorkDetail(true);
    setImgNum(0);
  }

  return (
    <div>
      <div>
        <div className={styles.worksArranger}>
        {works.map((work, index) => (
          <button key={index} onClick={() => workOnClicked(index)} className={styles.worksArrangerUnder}>
            <Image src={work.examples[0].img} alt={work.examples[0].description} className={styles.workImage} />
          </button>
        ))}
        </div>
      </div>

      {isShowWorkDetail &&
        <div className={styles.workMordal} onClick={() => setIsShowWorkDetail(false)}>
          <div className={styles.workMordalContent}>
            <div className={styles.workCloseButton} >
              <button onClick={() => setIsShowWorkDetail(false)}>✕</button>
            </div>
            <div className={styles.workDetailCard} onClick={(e) => e.stopPropagation()}>
              <div className={styles.workDescription}>
                {`${works[workNum].workDescription}`}
              </div>
              
              <div className={styles.workImageFlame} >
                <Image src={works[workNum].examples[imgNum].img} alt={works[workNum].examples[imgNum].description} className={styles.workImage} fill style={{ objectFit: 'contain' }}/>
              </div>
              <div className={styles.workChanger} >
                <button onClick={() => setImgNum((imgNum+(IMG_NUM-1))%IMG_NUM)}>＜</button>
                <button onClick={() => setImgNum((imgNum+1)%IMG_NUM)}>＞</button>
              </div>
            </div>
          </div>
          
        </div>
      }
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
    <div className="flex flex-col items-center">
      <main className="flex flex-col gap-50">
        <section id="thumbnail" className={`${styles.target} ${styles.topic}`}>
          <Thumbnail />
        </section>
        <section id="aboutMe" className={`${styles.target} ${styles.topic}`}>
          <AboutMe />
        </section>
        <section id="works" className={`${styles.target} ${styles.topic}`}>
          <Works />
        </section>
        <section id="skills" className={`${styles.target} ${styles.topic}`}>
          <Skills />
        </section>
        <section id="profill" className={`${styles.target} ${styles.topic}`}>
          <Profill />
        </section>
        <section id="contact" className={styles.target}>
          <Contact />
        </section>
      </main>
      
    </div>
  );
}
