import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "승연이가 말아주는 타로 맛집 - 운명 & 향수 추천",
  description: "승연이가 직접 봐주는 찐 타로! 당신의 운명을 이끄는 향수까지 완벽 매칭",
  keywords: "타로, 운세, 향수, 추천, 타로카드, 승연, 운명",
  openGraph: {
    title: "승연이가 말아주는 타로 맛집",
    description: "당신의 운명을 꿰뚫어보는 신비한 타로와 운명의 향수를 만나보세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mystical-gradient starfield`}
      >
        <div className="min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
