import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './defaults.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font',
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Spectron',
  description: 'The NextJS Starter Template for Disgruntled Developers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.variable}>
        <Theme className="font-bricolage">{children}</Theme>
      </body>
    </html>
  );
}
