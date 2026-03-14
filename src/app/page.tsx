"use client";

import Image, { StaticImageData } from "next/image";
import styles from "@/app/main.module.css";
import { useState } from "react";

import WELCOME from "@/app/images/Thumnail/welcome.svg";

import GMK1 from "@/app/images/works/gomoku/gomoku1.png";
import GMK2 from "@/app/images/works/gomoku/gomoku2.png";
import GMK3 from "@/app/images/works/gomoku/gomoku3.png";

import PT1 from "@/app/images/works/PT/PTdef.png";
import PT2 from "@/app/images/works/PT/PTworking.png";
import PT3 from "@/app/images/works/PT/PTrestiong.png";

import JIA1 from "@/app/images/works/JIA/J1F_1.png";
import JIA2 from "@/app/images/works/JIA/J1F_2.png";
import JIA3 from "@/app/images/works/JIA/J1F_Win.png";
import { DrawLogoSVG } from "./components/Welcome";


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
        description: "対戦の様子１",
      },
      {
        img: GMK2,
        description: "対戦の様子２",
      },
      {
        img: GMK3,
        description: "対戦の様子３（ライトモード）",
      },
    ],
  },
  {
    workName: "ポモドーロタイマー",
    workDescription: "ポモドーロ・テクニックを参考に制作したタイマー。はじめ、タイマーは25分に設定されており、25分経つと短いアラームが鳴り、5分の休憩タイマーが開始される。5分経つとまたアラームが鳴り、また25分に設定されて止まる。Pythonのtkinterを用いて実装。",
    examples: [
      {
        img: PT1,
        description: "タイマー開始前の様子",
      },
      {
        img: PT2,
        description: "タイマー開始後の作業中の様子",
      },
      {
        img: PT3,
        description: "タイマー開始後の休憩中の様子",
      },
    ],
  },
  {
    workName: "トマトマン",
    workDescription: "パックマンを参考に制作した2Dゲーム。当時の教授のオリジナルキャラ、通称「ハトヤマ」という白いキャラを、プレイヤーが操作するトマトが追いかけ、捕まえたタイムを競う。Javaを用いて実装。ちなみに、オブジェクトはすべて手描きのドット絵である。",
    examples: [
      {
        img: JIA1,
        description: "ゲーム中の様子１",
      },
      {
        img: JIA2,
        description: "ゲーム中の様子２",
      },
      {
        img: JIA3,
        description: "勝利画面",
      },
    ],
  },
];

type ChartContent = {
  label: string;
  value: number;
}

const progLang : ChartContent[] = [
  {
    label: "C言語",
    value: 12,
  },
  {
    label: "Python",
    value: 7,
  },
  {
    label: "Java",
    value: 6,
  },
  {
    label: "HTML/CSS",
    value: 1,
  },
  {
    label: "JavaScript",
    value: 2
  }
]

const frontend: ChartContent[] = [
  {
    label: "React",
    value: 3,
  },
  {
    label: "Next.js",
    value: 2,
  },
  {
    label: "Vite",
    value: 1,
  },
  {
    label: "TailwindCSS",
    value: 2,
  },
]

const IMG_NUM = 3;


const Thumbnail = () => {
  return (
    <div >
      <div className="flex flex-col justify-center gap-4">
        {/* <div className={styles.thumbnailTitle}>うぇるかむ</div> */}
        <DrawLogoSVG />
        <div>
          <div>Fujita Kohei - Fukui University Student</div>
          <div></div>
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
              <div className={styles.workName}>
                {`${works[workNum].workName}`}
              </div>
              <div className={styles.workDescription}>
                {`${works[workNum].workDescription}`}
              </div>
              <div className={styles.workImageFlame} >
                <Image src={works[workNum].examples[imgNum].img} alt={works[workNum].examples[imgNum].description} className={styles.workImage} fill style={{ objectFit: 'contain' }}/>
              </div>
              <div className={styles.workImageDescription}>
                {`画像 ${imgNum+1}  : ${works[workNum].examples[imgNum].description}`}
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
      <div className={styles.skillsKind}>
        <div>
          <div className="text-3xl">Programming Language</div>
          <SkillsChart contents={progLang}/>
        </div>
        <div>
          <div className="text-3xl">Frontend</div>
            <SkillsChart contents={frontend} />
        </div>
        <div>
          <div className="text-3xl">Backend</div>
            <div>DBの基本操作</div>
        </div>
        <div>
          <div className="text-3xl">Infrastructure</div>
            <div>Linuxの基礎</div>
        </div>
      </div>
    </div>
  );
}

const SkillsChart = ( {contents: langs}:{contents: ChartContent[]}) => {
  return (
    <div className={styles.skillsChartLanguage}>
      {langs.map((lang, index) => (
        <div key={index} className={styles.skillsChartBarContainer}>
          <div className={styles.skillsChartBar} style={{height: lang.value*16}}/>
          <div>{lang.label}</div>
          <div>{lang.value}カ月</div>
        </div>
      ))}
    </div>
  );
}

const Profill = () => {
  return (
    <div>
      <div className="text-5xl">Profill</div>
      <div className={styles.profillYearTitle}>
        <div className={styles.profillYear}>- 2004</div>
        <div className={styles.profillTitle}>爆誕</div>
      </div>
      <div className={styles.profillYearTitle}>
        <div className={styles.profillYear}>- 2023</div>
        <div className={styles.profillTitle}>福井大学入学</div>
      </div>
      
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

const Background = () => {
  return (
    <div className={styles.background}>
      {/* <div className={styles.backgroundName}>HAIKEI DAYO</div> */}
      <div className={styles.backgroundUpL}>00</div>
      <div className={styles.backgroundUpR}>01</div>
      <div className={styles.backgroundUnL}>10</div>
      <div className={styles.backgroundUnR}>11</div>
    </div>
    
  )
}




export default function Home() {
  
  return (
    <div className="flex flex-col items-center">
      <Background />
      <main className={styles.main}>
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
