import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PageWrapper from '../components/UI/PageWrapper';
import StyledMain from '../components/UI/StyledMain';
import PageHeader from '../components/PageHeader/PageHeader';
import { AuthProvider } from '@/components/AuthProvider';
import { authOptions } from '@/lib/auth/options';
import { getServerSession } from 'next-auth/next';
import { CssBaseline } from '@mui/material';
import StyledComponentsRegistry from '@/lib/registry/StyledComponentsRegistry';

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
        <CssBaseline />
        <AuthProvider session={session}>
          <StyledComponentsRegistry>
            <PageHeader />
            <StyledMain>
              <PageWrapper>{children}</PageWrapper>
            </StyledMain>
          </StyledComponentsRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
