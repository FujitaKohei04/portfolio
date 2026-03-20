import { User } from "lucide-react";
import Styles from "./AboutMe.module.css";
import { TopicTitle } from "../TopicTitle/TopicTitle";

export const AboutMe = () => {
  return (
    <div>
      <TopicTitle title="About Me" icon={User} />
      <div className={Styles.aboutMeDscription}>
        <div className={Styles.aboutMeName}>フジタコウヘイ</div>
        <div>
          <div>福井県出身で、福井大学 工学部 電気電子情報工学科に所属。
          アニメや漫画を見たり、お絵描きをするのが趣味。最近は料理にハマっている。
          
            そばやそうめんが好きで、３食同じでも飽きない。めんつゆは、
            <a href="https://www.yamamori.co.jp/products/sonomama_somen_500/" target="_blank" className={Styles.soumenSource}>
              これ
            </a>
            一択。
          </div>
          <div className={Styles.supplement}>このヤマモリのそうめんつゆに、青ネギを多めに入れて、刻みのりをパラっとかけて、最高のめんつゆの完成。もし飽きたら、卵を投下してみたり、ごま油をいれてみたり、わさびをちょっと混ぜてみたり、いろいろな楽しみ方がある。沼。</div>
        </div>
      </div>
    </div>
  );
}
