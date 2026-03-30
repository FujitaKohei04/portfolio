import { Lightbulb } from "lucide-react";
import Styles from "./Skills.module.css";
import { frontend, progLang } from "@/app/data/skill";
import { ChartContent } from "@/app/types/chart";
import { TopicTitle } from "../TopicTitle/TopicTitle";


export const Skills = () => {
  return (
    <div>
      <TopicTitle title="Skills" icon={Lightbulb} />
      <div className={Styles.skillsKind}>
        <div className={Styles.skillsCategory}>
          <div className={Styles.skillsCategoryName}>Programming Language</div>
          <SkillsChart contents={progLang}/>
        </div>
        <div className={Styles.skillsCategory}>
          <div className={Styles.skillsCategoryName}>Frontend</div>
            <SkillsChart contents={frontend} />
        </div>
        <div className={Styles.skillsCategory}>
          <div className={Styles.skillsCategoryName}>Backend</div>
            <div className={Styles.skillsCategoryContent}>DBの基本操作</div>
        </div>
        <div className={Styles.skillsCategory}>
          <div className={Styles.skillsCategoryName}>Infrastructure</div>
            <div className={Styles.skillsCategoryContent}>Linuxの基礎</div>
        </div>
      </div>
    </div>
  );
}

export const SkillsChart = ( {contents: langs}:{contents: ChartContent[]}) => {
  return (
    <div className={Styles.skillsCategory}>
      <div className={Styles.skillsChartLanguage}>
        {langs.map((lang, index) => (
          <div key={index} className={Styles.skillsChartBarContainer}>
            <div className={Styles.skillsChartBar} style={{height: lang.value*16}}/>
            <div>{lang.label}</div>
            <div>{lang.value}カ月</div>
          </div>
        ))}
      </div>
    </div>
  );
}