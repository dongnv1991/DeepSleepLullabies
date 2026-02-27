import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeepSleep Lullabies - Peaceful Sleep for Babies',
  description: 'Gentle Piano Lullabies for Deep, Peaceful Baby Sleep. Designed to mimic a mother\'s heartbeat and natural frequencies to help your little one drift into a calm, restorative slumber.',
  keywords: 'baby sleep, lullabies, deep sleep, peaceful sleep, 432Hz tuning, piano lullabies, newborn sleep',
  robots: 'index, follow',
  openGraph: {
    title: 'DeepSleep Lullabies - Peaceful Sleep for Babies',
    description: 'Gentle Piano Lullabies for Deep, Peaceful Baby Sleep.',
    url: 'https://deelsleep.com',
    siteName: 'DeepSleep Lullabies',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDogNN25G2UASis0CCluyXRHwZnAV4S7kZ4RRoxh1z0JDBXIiDH-7s4tWz-e68eHAEfp7j4ob3P-ybvWSZ9KlPO_xEwj6qCtLO8cMbiefaXdngSw75zu0RLV0EQiSsZ-RLLuZLNpetgBxFagRVTic2p5ayuM-BHkh-guuRYBiqYmu8JN7VZkbVnzqSYdE_3-se6EMiYWRm_gs7ZK0GEFif83abWqD3OBfbgWZuVqHTrUIgB8Q9JK9Y2vJrLrwuBi_tYfHb3opxe5aZx',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSleep Lullabies - Peaceful Sleep for Babies',
    description: 'Gentle Piano Lullabies for Deep, Peaceful Baby Sleep.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
