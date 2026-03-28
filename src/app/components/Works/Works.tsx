"use client";

import Image from "next/image";

import { Hammer } from "lucide-react";
import Styles from "./Works.module.css";
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
    <div>
      <div className={Styles.workName}>
        {`${work.workName}`}
      </div>
      <div className={Styles.workDescription}>
        {`${work.workDescription}`}
      </div>
      <div className={Styles.workImageFlame} >
        <Image src={work.examples[imgNum].img} alt={work.examples[imgNum].description} style={{ objectFit: 'contain' }}/>
      </div>
      <div className={Styles.workImageDescription}>
        {`画像 ${imgNum+1}  : ${work.examples[imgNum].description}`}
      </div>
      <div className={Styles.workChanger} >
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
        <div className={Styles.worksArranger}>
        {works.map((work, index) => (
          <button key={index} onClick={() => workOnClicked(index)} className={Styles.worksArrangerUnder}>
            <Image src={work.examples[0].img} alt={work.examples[0].description} className={Styles.workImage} />
          </button>
        ))}
        </div>
      </div>

      {isShowWorkDetail &&
        <Modal content={<WorkModalContent work={works[workNum]}/>} isShowModal={isShowWorkDetail} setIsShowModal={setIsShowWorkDetail} />
      }
    </div>
    
  );
}