// トップページの並び（2026-11-09に作り直した）。
//
// 兄の「クオリティが低い」という評価を受けて、りんが「全体の作りを参考サイト（カギ出張24時）に寄せて、
// AI感を無くしたい」と決めた（秘書側の HP分析/参考サイト_カギ出張24時.md）。借りたのは並びと見た目だけで、
// 文章・写真は使っていない。オーナーの回答が無い所はセクションごと出さず、ダミーで埋めない。
//
// それまでの PatternA.tsx（案A/B/Cの名残の名前で、548行が1ファイル）を、セクションごとのファイルに分けた。
// 上から順に：
import SiteHeader from "./SiteHeader"; //     ヘッダー（細い帯・店名と電話・青いメニュー）
import Hero from "./Hero"; //                 メイン（対応エリアと料金の目安）
import Strengths from "./Strengths"; //       選ばれる理由
import Services from "./Services"; //         鍵の対応サービス（赤い帯）
import Price from "./Price"; //               明朗会計（黄色い帯）と料金の目安
import Direct from "./Direct"; //             職人が直接お電話に出ます（他社との比較）
import Numbers from "./Numbers"; //           数字の帯
import Flow from "./Flow"; //                 ご依頼の流れ
import Area from "./Area"; //                 対応エリア
import ShopInfo from "./ShopInfo"; //         店舗情報
import Faq from "./Faq"; //                   よくあるご質問
import Contact from "./Contact"; //           お問い合わせフォーム
import CallToAction from "./CallToAction"; // 最後の電話の帯
import SiteFooter from "./SiteFooter"; //     フッター
import PhoneBar from "./PhoneBar"; //         画面の下にいつも出ている電話のバー
import { CallDialog } from "../PhoneLink"; // 電話番号を押したときの「ホームページを見た」の案内

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <CallDialog />
      <SiteHeader />
      <main className="flex w-full flex-col">
        <Hero />
        <Strengths />
        <Services />
        <Price />
        <Direct />
        <Numbers />
        <Flow />
        <Area />
        <ShopInfo />
        <Faq />
        <Contact />
        <CallToAction />
      </main>
      <SiteFooter />
      <PhoneBar />
    </div>
  );
}
