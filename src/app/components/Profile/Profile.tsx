import { Cat } from "lucide-react";
import Styles from "./Profile.module.css";


export const Profile = () => {
  return (
    <div>
      <div className={Styles.iconAndTitle}>
        <Cat className={Styles.icon} />
        <div className={Styles.topicTitle}>Profile</div>
      </div>
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