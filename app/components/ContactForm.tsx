"use client";

import { useState, type FormEvent } from "react";

// 【検証用】Googleフォームへの直接送信テスト
// 見た目はGoogleフォームを使わず、独自デザインのHTML/CSS/JSフォームから
// fetch(..., { mode: "no-cors" }) で Google の formResponse エンドポイントへ直接POSTする方式。
// 2026-08-07 に単体では動作確認済み。ここでは実際のNext.jsアプリ内への組み込みを検証する。
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdXGAtI1-8zPnk51pVHNDwahFd4YA94ZlEY0UOugs2JoBDxLg/formResponse";

// Googleフォーム側の各項目に対応する entry ID（FB_PUBLIC_LOAD_DATA_ から取得）
const ENTRY_IDS = {
  name: "entry.1801730329", // お名前
  email: "entry.1787936098", // メールアドレス
  phone: "entry.1314321309", // 電話番号
  message: "entry.454819737", // お問い合わせ内容
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    body.append(ENTRY_IDS.name, String(formData.get("name") ?? ""));
    body.append(ENTRY_IDS.email, String(formData.get("email") ?? ""));
    body.append(ENTRY_IDS.phone, String(formData.get("phone") ?? ""));
    body.append(ENTRY_IDS.message, String(formData.get("message") ?? ""));

    try {
      // no-cors: レスポンス内容は読めないが、送信自体は行われる
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
    } finally {
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-lg bg-green-50 px-6 py-4 text-green-800 dark:bg-green-950 dark:text-green-200">
        送信しました。ご連絡ありがとうございます。（検証用ページのため実際の折り返しはありません）
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <label className="flex flex-col gap-1 text-sm">
        お名前
        <span className="text-red-600"> *</span>
        <input
          name="name"
          type="text"
          required
          className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        メールアドレス
        <span className="text-red-600"> *</span>
        <input
          name="email"
          type="email"
          required
          className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        電話番号（緊急時のご連絡のため必須）
        <span className="text-red-600"> *</span>
        <input
          name="phone"
          type="tel"
          required
          className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        お問い合わせ内容
        <span className="text-red-600"> *</span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded bg-indigo-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
      >
        {status === "submitting" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
