import { Mail } from "lucide-react";
import Styles from "./Contact.module.css";


export const Contact = () => {
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
