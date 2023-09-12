import { Header } from './components/header/Header';
import React from 'react';
import './index.scss';

export const metadata = {
  title: 'The Movie',
  description: 'Here you will find the most top and popular movies and TV series of all time',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
