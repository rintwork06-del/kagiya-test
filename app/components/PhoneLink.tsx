"use client";

// 電話番号のリンクと、押したときに出す確認の画面（2026-11-09）。
//
// 兄との話し合い（2026-11-08）で決めた形：電話のボタンを押したら、すぐ発信せずに
// 「お電話の際は『ホームページを見た』とお伝えください」を出し、
// もう一度「電話をかける」を押すと発信する。ホームページ経由の依頼だと
// お店に伝わるようにするため。
//
// 使い方：電話番号を出す所はすべて <PhoneLink> で囲み、ページに <CallDialog /> を1つ置く。
// JavaScriptが動かない環境では、ふつうの tel: リンクとしてそのまま発信できる。

import type { MouseEvent, ReactNode } from "react";
import { SHOP_PHONE, SHOP_PHONE_TEL_HREF } from "../lib/shopInfo";
import { CALLBACK_NOTE } from "../lib/content";
import { PhoneIcon } from "./Icons";

const DIALOG_ID = "call-dialog";

export function PhoneLink({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const openDialog = (e: MouseEvent<HTMLAnchorElement>) => {
    const dialog = document.getElementById(DIALOG_ID);
    if (dialog instanceof HTMLDialogElement) {
      e.preventDefault();
      dialog.showModal();
    }
  };

  return (
    <a href={SHOP_PHONE_TEL_HREF} onClick={openDialog} className={className}>
      {children}
    </a>
  );
}

export function CallDialog() {
  return (
    <dialog
      id={DIALOG_ID}
      // 画面の外（暗い部分）を押したら閉じる
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto w-[calc(100%-3rem)] max-w-sm bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-black/50"
    >
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
        {/* 2026-11-09、りん：赤で強調する。2026-11-11、※を外した（兄：注釈ではなく、一番伝えたいことなので） */}
        <p className="t-body bg-red-50 px-4 py-3 font-bold text-brand-red">
          お電話の際は
          <br />
          「ホームページを見た」
          <br />
          とお伝えください
        </p>
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="flex w-full items-center justify-center gap-2 bg-brand-red px-6 py-3.5 font-bold text-white transition hover:brightness-110 active:translate-y-px"
        >
          <PhoneIcon className="h-5 w-5" />
          {SHOP_PHONE}
        </a>
        {/* 2026-11-11、電話に出られないことがある旨は、ここだけに出す（兄） */}
        <p className="t-note text-left text-slate-600">※{CALLBACK_NOTE}</p>
        <form method="dialog" className="w-full">
          <button
            type="submit"
            className="t-body w-full border border-slate-300 px-6 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            閉じる
          </button>
        </form>
      </div>
    </dialog>
  );
}
