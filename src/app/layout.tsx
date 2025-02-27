import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PageWrapper from '../components/ui/PageWrapper';
import PageHeader from '../components/PageHeader/PageHeader';
import { AuthProvider } from '@/components/AuthProvider';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'LexiGen - Your friendly AI content generator',
  description: 'Your friendly AI content generator'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider session={session}>
          <PageHeader />
          <PageWrapper>
            <main>{children}</main>
          </PageWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
