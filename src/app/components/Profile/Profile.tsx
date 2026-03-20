import { Cat } from "lucide-react";
import Styles from "./Profile.module.css";
import { TopicTitle } from "../TopicTitle/TopicTitle";


export const Profile = () => {
  return (
    <div>
      <TopicTitle title="Profile" icon={Cat} />
      <div className={Styles.profileYearTitle}>
        <div className={Styles.profileYear}>- 2004</div>
        <div className={Styles.profileTitle}>爆誕</div>
      </div>
      <div className={Styles.profileYearTitle}>
        <div className={Styles.profileYear}>- 2023</div>
        <div className={Styles.profileTitle}>福井大学入学</div>
      </div>
      
    </div>
  );
}