// 職人が写っている写真の右下に添える「写真はイメージです」（2026-11-11）。
// 写真はAIで作った人物で、実際に伺う職人とは違う。兄：「頼んだら別の顔の人が来ると誤解を生む」。
// 親の要素に relative が付いている前提。

export default function ImageNote() {
  return (
    <span className="t-note absolute right-0 bottom-0 bg-black/55 px-2 py-0.5 text-white">
      写真はイメージです
    </span>
  );
}
