"use client";

import Image from "next/image";
import Styles from "@/app/main.module.css";
import { useState } from "react";

import { User, Hammer, Lightbulb, Cat, Mail } from "lucide-react";

import { DrawLogoSVG } from "./components/Welcome";
import { WorkContent } from "./types/work";
import { IMG_NUM, WORKS } from "./data/work";
import { frontend, progLang } from "./data/skill";
import { ChartContent } from "./types/chart";

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
      <div className={Styles.iconAndTitle}>
        <User className={Styles.icon} />
        <div className={Styles.topicTitle}>About Me</div>
      </div>
      <div className={Styles.aboutMeDscription}>
        <div className={Styles.aboutMeName}>フジタコウヘイ</div>
        <div>
          <div>福井県出身で、福井大学 工学部 電気電子情報工学科に所属。
          アニメや漫画を見たり、お絵描きをするのが趣味。最近は料理にハマっている。
          
            そばやそうめんが好きで、３食同じでも飽きない。めんつゆは、
            <a href="https://www.yamamori.co.jp/products/sonomama_somen_500/" target="_blank" className={Styles.soumenSource}>
              これ
            </a>
            一択。
          </div>
          <div className={Styles.supplement}>このヤマモリのそうめんつゆに、青ネギを多めに入れて、刻みのりをパラっとかけて、最高のめんつゆの完成。もし飽きたら、卵を投下してみたり、ごま油をいれてみたり、わさびをちょっと混ぜてみたり、いろいろな楽しみ方がある。沼。</div>
        </div>
      </div>
    </div>
  );
}

const Works = () => {
  return (
    <div>
      <div className={Styles.iconAndTitle}>
        <Hammer className={Styles.icon} />
        <div className={Styles.topicTitle}>Works</div>
      </div>
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
        <div className={Styles.worksArranger}>
        {works.map((work, index) => (
          <button key={index} onClick={() => workOnClicked(index)} className={Styles.worksArrangerUnder}>
            <Image src={work.examples[0].img} alt={work.examples[0].description} className={Styles.workImage} />
          </button>
        ))}
        </div>
      </div>

      {isShowWorkDetail &&
        <div className={Styles.workMordal} onClick={() => setIsShowWorkDetail(false)}>
          <div className={Styles.workMordalContent}>
            <div className={Styles.workCloseButton} >
              <button onClick={() => setIsShowWorkDetail(false)}>✕</button>
            </div>
            <div className={Styles.workDetailCard} onClick={(e) => e.stopPropagation()}>
              <div className={Styles.workName}>
                {`${works[workNum].workName}`}
              </div>
              <div className={Styles.workDescription}>
                {`${works[workNum].workDescription}`}
              </div>
              <div className={Styles.workImageFlame} >
                <Image src={works[workNum].examples[imgNum].img} alt={works[workNum].examples[imgNum].description} className={Styles.workImage} fill style={{ objectFit: 'contain' }}/>
              </div>
              <div className={Styles.workImageDescription}>
                {`画像 ${imgNum+1}  : ${works[workNum].examples[imgNum].description}`}
              </div>
              <div className={Styles.workChanger} >
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
      <div className={Styles.iconAndTitle}>
        <Lightbulb className={Styles.icon} />
        <div className={Styles.topicTitle}>Skills</div>
      </div>
      <div className={Styles.skillsKind}>
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
    <div className={Styles.skillsChartLanguage}>
      {langs.map((lang, index) => (
        <div key={index} className={Styles.skillsChartBarContainer}>
          <div className={Styles.skillsChartBar} style={{height: lang.value*16}}/>
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
      <div className={Styles.iconAndTitle}>
        <Cat className={Styles.icon} />
        <div className={Styles.topicTitle}>Profill</div>
      </div>
      <div className={Styles.profillYearTitle}>
        <div className={Styles.profillYear}>- 2004</div>
        <div className={Styles.profillTitle}>爆誕</div>
      </div>
      <div className={Styles.profillYearTitle}>
        <div className={Styles.profillYear}>- 2023</div>
        <div className={Styles.profillTitle}>福井大学入学</div>
      </div>
      
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <div className={Styles.iconAndTitle}>
        <Mail className={Styles.icon} />
        <div className={Styles.topicTitle}>Contact</div>
      </div>
      <a href="mailto:fujita.kohei04@gmail.com">fujita.kohei04@gmail.com</a>
    </div>
  );
}

const Background = () => {
  return (
    <div className={Styles.background}>
      {/* <div className={styles.backgroundName}>HAIKEI DAYO</div> */}
      <div className={Styles.backgroundUpL}>00</div>
      <div className={Styles.backgroundUpR}>01</div>
      <div className={Styles.backgroundUnL}>10</div>
      <div className={Styles.backgroundUnR}>11</div>
    </div>
    
  )
}

export default function Home() {
  
  return (
    <div className="flex flex-col items-center">
      <Background />
      <main className={Styles.main}>
        <section id="thumbnail" className={`${Styles.target} ${Styles.topic}`}>
          <Thumbnail />
        </section>
        <section id="aboutMe" className={`${Styles.target} ${Styles.topic}`}>
          <AboutMe />
        </section>
        <section id="works" className={`${Styles.target} ${Styles.topic}`}>
          <Works />
        </section>
        <section id="skills" className={`${Styles.target} ${Styles.topic}`}>
          <Skills />
        </section>
        <section id="profill" className={`${Styles.target} ${Styles.topic}`}>
          <Profill />
        </section>
        <section id="contact" className={Styles.target}>
          <Contact />
        </section>
      </main>
      
    </div>
  );
}
