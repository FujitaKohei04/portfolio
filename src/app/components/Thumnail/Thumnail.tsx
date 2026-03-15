import { DrawLogoSVG } from "../Welcome/Welcome";
import Styles from "./Thumnail.module.css";


export const Thumbnail = () => {
  return (
    <div >
      <div className="flex flex-col justify-center gap-4">
        {/* <div className={styles.thumbnailTitle}>うぇるかむ</div> */}
        <DrawLogoSVG />
        <div>
          <div className={Styles.thumbnailNameAnimation}>Fujita Kohei - Fukui University Student</div>
          <div></div>
        </div>
        
      </div>
    </div>
  );
}