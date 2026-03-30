import { DrawLogoSVG } from "../Welcome/Welcome";
import Styles from "./Thumbnail.module.css";
import share from "@/app/styles/share.module.css";


export const Thumbnail = () => {
  return (
    
    <div className="flex flex-col justify-center gap-4">
      <section id="thumbnail" className={`${share.target}`}>
        <DrawLogoSVG />
        <div className={Styles.thumbnailNameAnimation}>Fujita Kohei - Fukui University Student</div>
      </section>
    </div>
  );
}