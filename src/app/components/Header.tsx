import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.header}>
            <a href="#aboutMe">About Me</a>
            <a href="#works">Works</a>
            <a href="#skills">Skills</a>
            <a href="#profill">Profill</a>
            <a href="#contact">Contact</a>
        </div>
    );

}