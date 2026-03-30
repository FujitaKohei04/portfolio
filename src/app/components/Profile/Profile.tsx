import { Cat } from "lucide-react";
import styles from "./Profile.module.css";
import { TopicTitle } from "../TopicTitle/TopicTitle";
import { history } from "@/app/data/history";

export const Profile = () => {
  return (
    <div>
      <TopicTitle title="Profile" icon={Cat} />
      <div className={styles.profileHistory}>
        {history.map((thing, index) => (
          <div key={index} className={styles.profileYearTitle}>
            <div className={styles.profileYear}>{thing.year}</div>
            <div className={styles.profileContent}>
              <div className={styles.profileTitle}>{thing.title}</div>
              <div className={styles.profileDescription}>{thing.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}