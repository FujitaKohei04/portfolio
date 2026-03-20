import Styles from "./TopicTitle.module.css";

export const TopicTitle = (
    {
        title, 
        icon: Icon,
    }: {
        title: string,
        icon: React.ElementType,
    }
) => {
    return (
        <div className={Styles.iconAndTitle}>
            <Icon className={Styles.icon} />
            <div className={Styles.topicTitle}>{title}</div>
        </div>
    )
}