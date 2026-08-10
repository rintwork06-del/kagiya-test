// 店舗の基本情報。
//
// 会社名・代表者名・電話番号・住所・資格情報は、個人経営で自宅兼用の可能性が
// あることも踏まえ、オーナー本人の同意・実際の値がまだ確認できていない
// （2026-08-10時点）。ここでは環境変数から読み、未設定時はダミー値に
// フォールバックする。
//
// 実際の値は .env.local （.gitignoreでGit管理外、Claude Codeにも開かせない）に
// りん自身が直接書き込むこと。書き方は .env.local.example を参照。
//
// 営業時間は個人情報に該当しないため、これまで通りコードに直書きしている
// （各パターンコンポーネント側を参照）。

export const SHOP_NAME =
  process.env.NEXT_PUBLIC_SHOP_NAME || "〇〇鍵屋（仮）";

export const OWNER_NAME =
  process.env.NEXT_PUBLIC_OWNER_NAME || "佐藤太郎（仮名）";

export const SHOP_PHONE =
  process.env.NEXT_PUBLIC_SHOP_PHONE || "000-0000-0000（ダミー）";

export const SHOP_ADDRESS =
  process.env.NEXT_PUBLIC_SHOP_ADDRESS || "〇〇県〇〇市〇〇 1-2-3（ダミー）";

// 資格情報は「もし存在するなら」の任意項目。未設定時は空文字にし、
// 各パターン側で空なら表示しない扱いにする。
export const QUALIFICATIONS = process.env.NEXT_PUBLIC_QUALIFICATIONS || "";
