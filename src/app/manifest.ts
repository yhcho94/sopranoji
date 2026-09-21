import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "소프라노 지정윤 | Soprano Ji Joungyun",
    short_name: "지정윤",
    description:
      "소프라노이자 세종리틀싱어즈 지휘자·단장 지정윤의 공식 홈페이지",
    start_url: "/",
    display: "standalone",
    background_color: "#08070a",
    theme_color: "#08070a",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    // 브라우저가 getInstalledRelatedApps()로 이 앱의 설치 여부를 알려주려면
    // 매니페스트가 자기 자신을 관련 앱으로 선언해야 한다.
    related_applications: [
      {
        platform: "webapp",
        url: "https://sopranoji.vercel.app/manifest.webmanifest",
      },
    ],
  };
}
