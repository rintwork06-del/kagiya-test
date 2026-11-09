// サイトで使う写真を1か所にまとめたもの（2026-11-09）。
// 写真を差し替えるときは、public/images/ に画像を置いて、ここの読み込み先を変えるだけでよい。
//
// 今はすべて8月に作った仮のAI画像。りんがChatGPTで作り直している最中で、
// できたものから差し替える（メイン・家の鍵・車の鍵・電話に出る職人・金庫）。
// 同じ画像を2か所で使っている所がある（兄の指摘「同じ画像の使い回し」）。差し替えで解消する。

import heroWork from "../../public/images/hero-work.jpg";
import workDoor from "../../public/images/work-door.jpg";
import workKey from "../../public/images/work-key.jpg";

export const PHOTOS = {
  hero: heroWork, // メイン（作業服の職人が鍵を持っている写真に差し替える）
  house: heroWork, // 家の鍵
  car: workDoor, // 車の鍵
  safe: workKey, // 金庫
  auction: workDoor, // 競売物件
  phone: workKey, // 職人が直接お電話に出ます
  contact: heroWork, // 最後の電話の帯の背景
};
