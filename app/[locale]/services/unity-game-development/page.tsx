import { Metadata } from "next";
import UnityGameDevelopmentContent from "./UnityGameDevelopmentContent";

export const metadata: Metadata = {
  title: "Unity Oyun Geliştirme | Unity Game Development | Ayris Tech",
  description: "Unity motoru ile 2D/3D oyunlar, mobil oyunlar ve etkileşimli deneyimler geliştiriyoruz. Professional Unity game development services with VR/AR support.",
  keywords: ["Unity", "oyun geliştirme", "game development", "Unity 3D", "mobile games", "VR", "AR", "multiplayer", "C#", "game design"],
  openGraph: {
    title: "Unity Oyun Geliştirme Hizmetleri | Ayris Tech",
    description: "Unity ile profesyonel 2D/3D oyun geliştirme, VR/AR deneyimleri ve mobil oyun uygulamaları.",
    url: "https://ayris.tech/services/unity-game-development",
    siteName: "Ayris Tech",
    images: [
      {
        url: "/services/unity-og.png",
        width: 1200,
        height: 630,
        alt: "Unity Game Development Services",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unity Oyun Geliştirme | Ayris Tech",
    description: "Unity ile profesyonel oyun geliştirme hizmetleri",
    images: ["/services/unity-twitter.png"],
  },
  alternates: {
    canonical: "https://ayris.tech/services/unity-game-development",
    languages: {
      'tr-TR': 'https://ayris.tech/services/unity-game-development',
      'en-US': 'https://ayris.tech/en/services/unity-game-development',
    },
  },
};

export default function UnityGameDevelopmentPage() {
  return <UnityGameDevelopmentContent />;
}