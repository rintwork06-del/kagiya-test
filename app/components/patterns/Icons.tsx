// サンプルページ共通のアイコン集。絵文字だと環境ごとに見た目が変わり
// 安っぽくなりやすいため、インラインSVGに統一する（外部ライブラリ不使用、
// 静的エクスポートと相性が良い）。色は currentColor で親要素から継承する。

import type { CSSProperties, ReactElement } from "react";
import type { ServiceIconKey } from "../../lib/dummyContent";

type IconProps = { className?: string; style?: CSSProperties };

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: props.className ?? "h-5 w-5",
    style: props.style,
  };
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="7.5" cy="15.5" r="4" />
      <path d="M10.3 12.7 20 3m-3.5 3.5 3 3M13 10l2.5 2.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// 現在は未使用。営業時間の明示で使う想定のため残している（2026-09-04）。
export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// 現在は未使用。タスク「対応場所・対応エリアの明示」で使う想定のため残している
// （エリア範囲はオーナー確認待ち。2026-09-04）。
export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

// --- 対応サービス用（SERVICE_MENUのicon名と対応） ---

export function CarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 13 6.5 8a2 2 0 0 1 1.9-1.4h7.2A2 2 0 0 1 17.5 8L19 13" />
      <path d="M4 13h16a1 1 0 0 1 1 1v3.5h-2M3 17.5V14a1 1 0 0 1 1-1m1 4.5H3" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
      <path d="M9.3 17.5h5.4" />
    </svg>
  );
}

export function CarKeyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 12.5 7.2 8.6A2 2 0 0 1 9.1 7.2h5.8a2 2 0 0 1 1.9 1.4l1.2 3.9" />
      <path d="M5 12.5h14v3h-2.2M5 15.5v-3" />
      <circle cx="9" cy="19" r="2.2" />
      <path d="M10.8 17.6 14 14.5m-1.5 1.5 1.2 1.2" />
    </svg>
  );
}

export function HouseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  );
}

export function KeysIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="7" cy="7.5" r="3" />
      <path d="M9.2 9.7 14 14.5m-2-.5 1.5 1.5M12.5 13l1.5-1.5" />
      <circle cx="16.5" cy="17" r="3" />
    </svg>
  );
}

export function SwapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h13m0 0-3-3m3 3-3 3" />
      <path d="M20 16H7m0 0 3-3m-3 3 3 3" />
    </svg>
  );
}

export function KeyholeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="2.2" />
      <path d="m11 11.8-1 4.7h4l-1-4.7" />
    </svg>
  );
}

export function DialIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M12 9.5v2.5l1.8 1" />
    </svg>
  );
}

// SERVICE_MENUのicon名からSVGを引く共通コンポーネント（3パターンで共用）
const SERVICE_ICONS: Record<ServiceIconKey, (p: IconProps) => ReactElement> = {
  car: CarIcon,
  carKey: CarKeyIcon,
  house: HouseIcon,
  keys: KeysIcon,
  swap: SwapIcon,
  keyhole: KeyholeIcon,
  dial: DialIcon,
  key: KeyIcon,
};

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: ServiceIconKey }) {
  const Icon = SERVICE_ICONS[name];
  return <Icon {...props} />;
}
