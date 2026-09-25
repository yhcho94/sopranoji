import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SITE_URL = "https://sopranoji.vercel.app";
const SITE_TITLE = "소프라노 지정윤 | Soprano Ji Joungyun";
const SITE_DESCRIPTION =
  "소프라노이자 세종리틀싱어즈 지휘자·단장 지정윤의 공식 홈페이지. 소개, 보도자료, 컨택트 정보를 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | 소프라노 지정윤",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "지정윤",
    "소프라노 지정윤",
    "Ji Joungyun",
    "세종리틀싱어즈",
    "세종리틀싱어즈 지휘자",
    "튀김소보체",
    "디바칸타빌레",
    "세종드림예술기획",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "소프라노 지정윤",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  appleWebApp: {
    title: "지정윤",
    statusBarStyle: "black-translucent",
  },
  verification: {
    other: {
      "naver-site-verification": "3145966b2876ec0c8405e82fed67dfa7ee73f732",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08070a",
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "지정윤",
  alternateName: "Ji Joungyun",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile-hero.jpg`,
  jobTitle: ["소프라노", "지휘자"],
  description: SITE_DESCRIPTION,
  affiliation: [
    { "@type": "Organization", name: "세종리틀싱어즈" },
    { "@type": "Organization", name: "세종드림예술기획" },
    { "@type": "Organization", name: "튀김소보체" },
    { "@type": "Organization", name: "디바칸타빌레" },
  ],
  sameAs: [
    "https://www.instagram.com/jjy1340",
    "https://youtube.com/channel/UCAKsSWLfvD0hgk-aLIKF2SQ",
    "https://naver.me/5LQZ7evZ",
    "https://www.facebook.com/share/1AsFo2t6jG/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <Header />
        <main className="flex-1 pt-16 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
