import { DrawLogoSVG } from "../Welcome/Welcome";
import Styles from "./Thumnail.module.css";


export const Thumbnail = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <DrawLogoSVG />
      <div className={Styles.thumbnailNameAnimation}>Fujita Kohei - Fukui University Student</div>
    </div>
  );
}