import './globals.css';
import { Inter } from 'next/font/google';
import { CounterProvider } from './context/CounterProvider'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ユーザの一覧ページ',
  description: 'JSONPlaceHolderから取得したユーザ一覧です。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  team: React.ReactNode,
  analytics: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterProvider>{children}</CounterProvider>
      </body>
    </html>
  );
}