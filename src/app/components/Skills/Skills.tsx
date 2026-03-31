import { Lightbulb } from "lucide-react";
import styles from "./Skills.module.css";
import { frontend, progLang } from "@/app/data/skill";
import { ChartContent } from "@/app/types/chart";
import { TopicTitle } from "../TopicTitle/TopicTitle";


export const Skills = () => {
  return (
    <div>
      <TopicTitle title="Skills" icon={Lightbulb} />
      <div className={styles.skillsKind}>
        <div className={styles.skillsCategory}>
          <div className={styles.skillsCategoryName}>Programming Language</div>
          <SkillsChart contents={progLang}/>
        </div>
        <div className={styles.skillsCategory}>
          <div className={styles.skillsCategoryName}>Frontend</div>
          <SkillsChart contents={frontend} />
        </div>
        <div className={styles.skillsCategory}>
          <div className={styles.skillsCategoryName}>Backend</div>
          <div className={styles.chartLabel}>SQLの基礎</div>
        </div>
        <div className={styles.skillsCategory}>
          <div className={styles.skillsCategoryName}>Infrastructure</div>
          <div className={styles.chartLabel}>Linuxの基礎</div>
        </div>
      </div>
    </div>
  );
}

export const SkillsChart = ( {contents: langs}:{contents: ChartContent[]}) => {
  // const max = Math.max(...langs.map(l => l.value));
  const max = 13;
  return (
    <div className={styles.chartContainer}>
      <div className={styles.skillsChartLanguage}>
        {langs.map((lang, index) => (
          <div key={index} className={styles.skillsChartBarContainer}>
            <div className={styles.chartLabel}>{lang.label}</div>
            <div className={styles.skillsChartBar} style={{width: `${lang.value/max*100}%`}}>{lang.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.chartUnit}>
        [months]
      </div>
    </div>
  );
}