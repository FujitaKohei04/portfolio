import { Mail, X } from "lucide-react";
import Styles from "./Contact.module.css";
import { TopicTitle } from "../TopicTitle/TopicTitle";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { CiMail } from "react-icons/ci";

const LinkButton = ({
  url, 
  icon: Icon
}: {
  url: string, 
  icon: React.ElementType
}) => {
  return (
    <button 
      onClick={() => window.open(url, "_blank")}
    >
      <Icon className={Styles.icon} style={{border: "1px solid black", borderRadius: "50%"}}/>
    </button>
  );
}

export const Contact = () => {
  return (
    <div>
      <TopicTitle title="Contact" icon={Mail} />
      <div className={Styles.contactIcons}>
      	<a href="mailto:fujita.kohei04@gmail.com">
          <CiMail className={Styles.icon} style={{border: "1px solid black", borderRadius: "50%"}}/>
        </a>
	      <LinkButton url="https://x.com/FujitaK248" icon={FaXTwitter}/>
        <LinkButton url="https://github.com/FujitaKohei04" icon={FiGithub}/>
        <LinkButton url="https://zenn.dev/fuji_842" icon={SiZenn} />
      </div>
    </div>
  );
}
