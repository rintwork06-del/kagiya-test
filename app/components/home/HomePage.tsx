// トップページの並び（2026-11-09に作り直した）。
//
// 兄の「クオリティが低い」という評価を受けて、りんが「全体の作りを参考サイト（カギ出張24時）に寄せて、
// AI感を無くしたい」と決めた（秘書側の HP分析/参考サイト_カギ出張24時.md）。同日、参考サイトと同じ言い回し・
// 英字の札・色の組み合わせになっていた所を書き直した（文章はすべて自分の言葉、色は紺と赤の2色が中心）。
// オーナーの回答が無い所はセクションごと出さず、ダミーで埋めない。
//
// それまでの PatternA.tsx（案A/B/Cの名残の名前で、548行が1ファイル）を、セクションごとのファイルに分けた。
// 上から順に：
import SiteHeader from "./SiteHeader"; //     ヘッダー（細い帯・店名と電話・紺のメニュー）
import Hero from "./Hero"; //                 メイン（対応エリアと料金の目安）
import Strengths from "./Strengths"; //       当店の特長
import Services from "./Services"; //         対応している鍵
import Price from "./Price"; //               3つのお約束と料金の目安
import Direct from "./Direct"; //             当店について（他社との比較）
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
