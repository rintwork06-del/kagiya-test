// サイトで使う写真を1か所にまとめたもの（2026-11-09）。
// 写真を差し替えるときは、public/images/ に画像を置いて、ここの読み込み先を変えるだけでよい。
//
// 2026-11-09、りんがGeminiで作った5枚に差し替えた（同じ男性・同じ紺の作業服でそろえた）。
// 競売物件の写真も同日に追加した（6枚目）。
// 最後の電話の帯の背景は、紺を濃く重ねるので、電話の写真を使い回している。

import hero from "../../public/images/hero.jpg"; //       作業服の職人が鍵を持って笑っている（住宅街）
import house from "../../public/images/house.jpg"; //     玄関ドアの鍵の作業
import car from "../../public/images/car.jpg"; //         車のドアの鍵の作業
import phone from "../../public/images/phone.jpg"; //     バンの運転席で電話に出る
import safe from "../../public/images/safe.jpg"; //       家庭用の金庫の作業
import auction from "../../public/images/auction.jpg"; // 空き家の玄関で鍵を交換する

export const PHOTOS = {
  hero, // メイン
  house, // 家の鍵
  car, // 車の鍵
  safe, // 金庫
  auction, // 競売物件
  phone, // 職人が直接お電話に出ます
  contact: phone, // 最後の電話の帯の背景
};
