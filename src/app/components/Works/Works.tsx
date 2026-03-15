"use client";

import Image from "next/image";

import { Hammer } from "lucide-react";
import Styles from "./Works.module.css";
import { IMG_NUM, WORKS } from "@/app/data/work";
import { useState } from "react";
import { WorkContent } from "@/app/types/work";


export const Works = () => {
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

export const Work = ({workContents}:{workContents: WorkContent[]}) => {
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