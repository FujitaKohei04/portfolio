import Styles from "./Background.module.css";


export const Background = () => {
  return (
    <div className={Styles.background}>
      {/* <div className={styles.backgroundName}>HAIKEI DAYO</div> */}
      <div className={Styles.backgroundUpL}>00</div>
      <div className={Styles.backgroundUpR}>01</div>
      <div className={Styles.backgroundUnL}>10</div>
      <div className={Styles.backgroundUnR}>11</div>
    </div>
    
  )
}