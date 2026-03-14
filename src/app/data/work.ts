import GMK1 from "@/app/images/works/gomoku/gomoku1.png";
import GMK2 from "@/app/images/works/gomoku/gomoku2.png";
import GMK3 from "@/app/images/works/gomoku/gomoku3.png";

import PT1 from "@/app/images/works/PT/PTdef.png";
import PT2 from "@/app/images/works/PT/PTworking.png";
import PT3 from "@/app/images/works/PT/PTrestiong.png";

import JIA1 from "@/app/images/works/JIA/J1F_1.png";
import JIA2 from "@/app/images/works/JIA/J1F_2.png";
import JIA3 from "@/app/images/works/JIA/J1F_Win.png";
import { WorkContent } from "../types/work";

export const IMG_NUM = 3;

export const WORKS: WorkContent[] = [
  {
    workName: "五目並べ",
    workDescription: "ローカル用五目並べ。〇側と✕側のマークに分かれ、盤面上に「縦」「横」「斜め」のいずれかに対し、先にマークを５つ並べたほうが勝ち。Next.jsを用いて実装。",
    examples: [
      {
        img: GMK1,
        description: "対戦の様子１",
      },
      {
        img: GMK2,
        description: "対戦の様子２",
      },
      {
        img: GMK3,
        description: "対戦の様子３（ライトモード）",
      },
    ],
  },
  {
    workName: "ポモドーロタイマー",
    workDescription: "ポモドーロ・テクニックを参考に制作したタイマー。はじめ、タイマーは25分に設定されており、25分経つと短いアラームが鳴り、5分の休憩タイマーが開始される。5分経つとまたアラームが鳴り、また25分に設定されて止まる。Pythonのtkinterを用いて実装。",
    examples: [
      {
        img: PT1,
        description: "タイマー開始前の様子",
      },
      {
        img: PT2,
        description: "タイマー開始後の作業中の様子",
      },
      {
        img: PT3,
        description: "タイマー開始後の休憩中の様子",
      },
    ],
  },
  {
    workName: "トマトマン",
    workDescription: "パックマンを参考に制作した2Dゲーム。当時の教授のオリジナルキャラ、通称「ハトヤマ」という白いキャラを、プレイヤーが操作するトマトが追いかけ、捕まえたタイムを競う。Javaを用いて実装。ちなみに、オブジェクトはすべて手描きのドット絵である。",
    examples: [
      {
        img: JIA1,
        description: "ゲーム中の様子１",
      },
      {
        img: JIA2,
        description: "ゲーム中の様子２",
      },
      {
        img: JIA3,
        description: "勝利画面",
      },
    ],
  },
];