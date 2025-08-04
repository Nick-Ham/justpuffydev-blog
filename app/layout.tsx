import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'justPuffy.dev',
    description: 'landing page and blog for justPuffy\'s content'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <body>
        {children}
        </body>
        </html>
    );
}