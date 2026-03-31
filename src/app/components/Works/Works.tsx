"use client";

import Image from "next/image";

import { Hammer } from "lucide-react";
import styles from "./Works.module.css";
import { IMG_NUM, WORKS } from "@/app/data/work";
import { useState } from "react";
import { WorkContent } from "@/app/types/work";
import { createPortal } from "react-dom";
import { TopicTitle } from "../TopicTitle/TopicTitle";
import { Modal } from "@/app/ui/Modal";


export const Works = () => {
  return (
    <div>
      <TopicTitle title="Works" icon={Hammer} />
      <div>
        <Work workContents={WORKS}/>
      </div>
    </div>
  );
}

const WorkModalContent = (
  {
    work,
  }: {
    work: WorkContent,
  }
) => {
  const [imgNum, setImgNum] = useState(0);

  return (
    <div className={styles.card} onClick={(e) => e.stopPropagation()}>
      <div className={styles.workName}>
        {`${work.workName}`}
      </div>
      <div className={styles.workDescription}>
        {`${work.workDescription}`}
      </div>
      <div className={styles.workImageFlame} >
        <Image src={work.examples[imgNum].img} alt={work.examples[imgNum].description} layout="fill" style={{ objectFit: 'contain' }}/>
      </div>
      <div className={styles.workImageDescription}>
        {`画像 ${imgNum+1}  : ${work.examples[imgNum].description}`}
      </div>
      <div className={styles.workChanger} >
        <button onClick={() => setImgNum((imgNum+(IMG_NUM-1))%IMG_NUM)}>＜</button>
        <button onClick={() => setImgNum((imgNum+1)%IMG_NUM)}>＞</button>
      </div>
    </div>
  );
}

export const Work = ({workContents}:{workContents: WorkContent[]}) => {
  const [workNum, setWorkNum] = useState(0);
  const [imgNum, setImgNum] = useState(0);
  const [works, setWorks] = useState<WorkContent[]>(workContents);
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
          <div className={styles.workWrapper} key={index}>
            <div className={styles.workName}>{work.workName}</div>
            <button onClick={() => workOnClicked(index)} className={styles.worksArrangerUnder}>
              <Image src={work.examples[0].img} alt={work.examples[0].description} layout="fill" objectFit="cover"/>
            </button>
          </div>
        ))}
        </div>
      </div>
      {isShowWorkDetail &&
        <Modal content={<WorkModalContent work={works[workNum]}/>} isShowModal={isShowWorkDetail} setIsShowModal={setIsShowWorkDetail} />
      }
    </div>
  );
}